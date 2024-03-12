import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var MFPPush: any;
declare var WLAuthorizationManager: any;

@Component({
  selector: 'app-pmf-push',
  templateUrl: './pmf-push.page.html',
  styleUrls: ['./pmf-push.page.scss'],
})
export class PmfPushPage implements OnInit {
  constructor(public httpClient: HttpClient) { }
  private readonly URL = '../../assets/data/push_options.json';
  items: any[] = [];
  wlInitOptions = {
    // Options to initialize with the WL.Client object.
    mfpContextRoot: '/mfp', // "mfp" is the default context root in the MobileFirst Development server
    applicationId: 'com.mfp.push.app'

  };
  options = {
    "categories": {
      "Category_Name1": [
        {
          "buttonLabel": "Accept",
          "buttonName": "Accept",
          "iconName": "IconName_1"
        },
        {
          "buttonLabel": "Reject",
          "buttonName": "Reject",
          "iconName": "IconName_2"
        }
      ],
      "Category_Name2": [
        {
          "buttonLabel": "Ok",
          "buttonName": "Ok",
          "iconName": "IconName_3"
        },
        {
          "buttonLabel": "Cancle",
          "buttonName": "Cancle",
          "iconName": "IconName_4"
        }
      ]
    }
  };


  ngOnInit() {
    this.httpClient.get(this.URL)
      .subscribe((res: any) => {
        this.items = res;
        console.warn(this.items);
      });
    this._initialise_plugin()
  }

  _initialise_plugin() {
    var options = {};
    MFPPush.initialize(
      function (successResponse: any) {
        console.log("Successfully intialized", successResponse);
        //MFPPush.registerNotificationsCallback(notificationReceived);
      }, function (failureResponse: any) {
        console.log("Failed to initialize");
      }, options);
  }

  _register_device(id: any) {
    if (id === 1) {
      console.log('register device');
      WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(
        function (accessToken: any) {
          console.log("Successfully accessToken granted", JSON.stringify(accessToken));
          try {
            MFPPush.registerDevice(
              null,
              function (successResponse: any) {
                console.log("Successfully registered", JSON.stringify(successResponse));
                alert("Device Successfully registered");
                //enableButtons();
              },
              function (failureResponse: any) {
                console.log("Failed to register", failureResponse);
                alert("Failed to register device");
                console.log("Failed to register device:" + JSON.stringify(failureResponse));
              }
            )
          } catch (error) {
            alert('error--' + error)
          }

        }
      );
    } else if (id === 2) {
      var tags = ['sample-tag1', 'sample-tag2'];
      WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(
        MFPPush.subscribe(
          tags,
          function (tags: any) {
            alert("Subscribed successfully");
          }, function (failureResponse: any) {
            alert("Failed to subscribe");
            console.log("Failed to subscribe:" + JSON.stringify(failureResponse));
          }
        )
      );
    } else if (id === 3) {
      WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(
        MFPPush.getTags(
          function (newTags: any) {
            tags = newTags;
            alert(JSON.stringify(tags));
          },
          function (failureResponse: any) {
            alert("Failed to get tags");
            console.log("Failed to get tags:" + JSON.stringify(failureResponse));
          }
        )
      );
    }
    else if (id === 5) {
      MFPPush.isPushSupported (
        function(successResponse:any) {
            alert("Push Supported: " + successResponse);
        },
        function(failureResponse:any) {
            alert("Failed to get push support status"+failureResponse);
        }
    );
    } else {
      WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(
        MFPPush.unregisterDevice(
          function (successResponse: any) {
            alert("Unregistered successfully");

          },
          function (failureResponse: any) {
            alert("Failed to unregister");
            console.log("Failed to unregister:" + JSON.stringify(failureResponse));
          }
        )
      );
    }
  }
}
