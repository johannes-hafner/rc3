# rc3 Stuff
Collection of usefull stuff created during the Remote Chaos Experience 2020.

## Current contents:
* https://github.com/johannes-hafner/rc3/blob/main/fixCamRC3World.user.js 

  A user script (tested only in Chrome as the issue seems to be Chrom-specific as well) to fix an issue where no video input device will work when entering the 2D world if the first device tried by Chrome cannot be accessed by Chrome at that point. This might, for example, happen if another software accesses that webcam under an OS where only one application can access a video input device at a time.
  
  Installation:  [Download the script](https://github.com/johannes-hafner/rc3/raw/main/fixCamRC3World.user.js). Then either install the [Tampermonkey Extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and use it to install the userscript, or open chrome://extensions, flip the "Developer Mode" switch in the top right corner to "on" and drag & drop the script into the window.
