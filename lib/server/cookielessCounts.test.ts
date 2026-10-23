import assert from 'node:assert/strict';
import test from 'node:test';
import { NextRequest } from 'next/server';
import { cookielessCountRow } from './cookielessCounts';

const now = new Date('2026-10-20T15:24:48Z');
function request(path = '/agentic-ai/', headers: Record<string, string> = {}) {
  return new NextRequest(`https://idigdata.com${path}`, { headers: { accept: 'text/html', 'user-agent': 'Mozilla/5.0 Chrome/130', ...headers } });
}
test('declined requests count without retaining identifiers or query data', () => {
  const row = cookielessCountRow(request('/collective/?email=private@example.com', {
    cookie: 'idig_cookie_consent=declined; idig_anon_sid=private',
    'x-forwarded-for': '192.0.2.1', referer: 'https://private.example/secret',
  }), now);
  assert.deepEqual(row, { source: 'idigdata-cookieless-count', path: '/collective/', occurred_at: '2026-10-20T15:00:00.000Z', is_bot: false });
});
test('only target pages count; prefetch, local, internal and HEAD do not', () => {
  assert.equal(cookielessCountRow(request('/contact/'), now), null);
  assert.equal(cookielessCountRow(request('/agentic-ai/?internal=1'), now), null);
  assert.equal(cookielessCountRow(request('/agentic-ai/', { 'next-router-prefetch': '1' }), now), null);
  assert.equal(cookielessCountRow(request('/agentic-ai/', { 'sec-purpose': 'prefetch' }), now), null);
  assert.equal(cookielessCountRow(new NextRequest('http://localhost:3100/collective/'), now), null);
  assert.equal(cookielessCountRow(new NextRequest('https://idigdata.com/collective/', { method: 'HEAD' }), now), null);
});
test('RSC navigation counts, and known automation is classified separately', () => {
  assert.ok(cookielessCountRow(request('/agentic-ai', { accept: 'text/x-component', rsc: '1' }), now));
  assert.equal(cookielessCountRow(request('/collective/', { 'user-agent': 'Googlebot' }), now)?.is_bot, true);
  assert.equal(cookielessCountRow(request('/collective/', { 'user-agent': 'Validator.nu/LV' }), now)?.is_bot, true);
});
