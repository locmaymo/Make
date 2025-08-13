body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);
obj.entitlement.status="subscriber";
obj.current_subs={
      "product_id": "lightroom",
      "store": "adobe",
      "purchase_date": "2025-08-13T14:54:50.419593Z",
    };
obj.entitlement.storage={
      "used": 0,
      "limit": 45097156608,
      "display_limit": 42949672960,
      "warn": 34359738368
    };
obj.avatar.placeholder=true;
if (obj.entitlement) {
    delete obj.entitlement.trial;
    delete obj.entitlement.deletion_date;
    delete obj.entitlement.expired_date;
}
body = JSON.stringify(obj); 
$done({body});
