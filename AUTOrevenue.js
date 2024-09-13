# Revenuecat Universal Script
[Script]
Revenuecat = type=http-response, pattern=https:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/(?!.*\/(offerings|attributes|adservices_attribution)$).*), script-path=https://raw.githubusercontent.com/sultan1sa/Rewrite/main/Revenuecat-unlocked/Revenuecat.js, requires-body=true, max-size=-1, timeout=60
[mitm]
hostname = api.revenuecat.com 