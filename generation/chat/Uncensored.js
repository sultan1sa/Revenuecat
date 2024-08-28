



[rewrite_local]
AppAdTesters = type=http-response,pattern=https://api.adapty.io/api/v1/sdk/analytics/profiles,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://raw.githubusercontent.com/sultan1sa/Revenuecat/main/generation/Revenuecat.js,script-update-interval=5

[MITM]
hostname = api.adapty.io