*******************************/

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Revenuecat/main/generation/anybox/anybox.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


// GENERATED BY SGFRC By D3WXY
let obj = {
    "request_date_ms": 1704664060864,
    "request_date": "2024-01-07T21:47:40Z",
    "subscriber": {
        "non_subscriptions": {},
        "first_seen": "2024-01-07T21:42:02Z",
        // GENERATED BY SGFRC By D3WXY
        "original_application_version": "1",
        "other_purchases": {},
        "management_url": null,
        // GENERATED BY SGFRC By D3WXY
        "subscriptions": {
            "cc.anybox.Anybox.lifetime": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                // GENERATED BY SGFRC By D3WXY
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            }
        },
        "entitlements": {
            "pro": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "cc.anybox.Anybox.lifetime"
            }
        },
        "original_purchase_date": "2024-01-07T21:38:41Z",
        // GENERATED BY SGFRC By D3WXY
        "original_app_user_id": "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
        "last_seen": "2024-01-07T21:42:02Z"
    }
};
$done({response: {body: JSON.stringify(obj), status: 200}});
// GENERATED BY SGFRC By D3WXY