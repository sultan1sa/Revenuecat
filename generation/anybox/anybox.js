*******************************/

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Revenuecat/main/generation/anybox/anybox.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1665733801390,
  "request_date" : "2022-10-14T07:50:01Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-10-14T07:45:36Z",
    "original_application_version" : "47",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "cc.anybox.Anybox.lifetime" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "annual",
        "expires_date" : "2029-10-14T07:49:44Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-10-14T07:49:45Z",
        "purchase_date" : "2022-10-14T07:49:44Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-10-14T07:49:44Z",
        "product_identifier" : "cc.anybox.Anybox.lifetime",
        "expires_date" : "2029-10-14T07:49:44Z"
      }
    },
    "original_purchase_date" : "2022-10-14T07:26:13Z",
    "original_app_user_id" : "$RCAnonymousID",
    "last_seen" : "2022-10-14T07:45:36Z"
  }
}

$done({body : JSON.stringify(objc)});