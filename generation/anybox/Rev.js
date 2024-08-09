const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

const list = {
    
		'1Blocker': { eKey: 'unlock', pID: 'com.overdesigned.incognito.lifetime' },
    
		'Mizframa': { eKey: 'plus', pID: 'PlusYearly' },
    
		'NumbNow': { eKey: 'pro', pID: 'yearly' },
    
		'Clipboard': { eKey: 'jodel_premium', pID: 'no_ads_v1_1mo_ar_full' },
    
		'Radarbot': { eKey: 'pro', pID: 'com.tk.client.lifetime' },
    
		'Suret': { eKey: 'pro', pID: 'com.idevtal.Wallpapers.Subscriptions.Yearly2' },
    
		'WidgetSmith': { eKey: 'Premium', pID: 'PremiumMonthlyWidgetsmith' },
    
		'VSCO': { eKey: 'pro', pID: 'vscopro_global_5999_annual_7D_free' },
    
		'Darkroom': { eKey: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', pID: 'co.bergen.Darkroom.product.forever.everything' },
    
		'Structured': { eKey: 'pro', pID: 'today.structured.pro' },
        
		'FitnessAi': { eKey: 'Premium', pID: 'annual_189.99_3' },
    
		'BookmarkPro': { eKey: 'pro', pID: 'it.beatcode.bookmarkmanager.lifetime' },
    
		'Pillow': { eKey: 'premium', pID: 'com.neybox.pillow.premium.year' },
    
		'Off': { eKey: 'unlock_everthing', pID: 'com.bridgetech.off.lifetime' },
    
		'Amie': { eKey: 'pro', pID: 'amie_pro_9999_1y_23012024' },
    
		'AppName': { eKey: 'entitlement', pID: 'product identifier' } 
};

const data = {
    "expires_date": "2099-09-09T13:37:37Z",
    "original_purchase_date": "2024-01-01T13:37:37Z",
    "purchase_date": "2024-01-01T13:37:37Z",
    "event_status": "PURCHASED"
};

if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    for (const i in list) {
        if (new RegExp(`^${i}`, `i`).test(ua)) {
            obj.subscriber.subscriptions[list[i].pID] = data;
            obj.subscriber.entitlements[list[i].eKey] = JSON.parse(JSON.stringify(data));
            obj.subscriber.entitlements[list[i].eKey].product_identifier = list[i].pID;
            break;
        }
    }
    resp.body = JSON.stringify(obj);
}
$done(resp);