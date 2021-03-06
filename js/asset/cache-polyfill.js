/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

!function(){var t=Cache.prototype.addAll,e=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(e)var r=e[1],n=parseInt(e[2]);t&&(!e||"Firefox"===r&&n>=46||"Chrome"===r&&n>=50)||(Cache.prototype.addAll=function(t){var e=this;function r(t){this.name="NetworkError",this.code=19,this.message=t}return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var e=new URL(t.url).protocol;if("http:"!==e&&"https:"!==e)throw new r("Invalid scheme");return fetch(t.clone())}))}).then(function(n){if(n.some(function(t){return!t.ok}))throw new r("Incorrect response status");return Promise.all(n.map(function(r,n){return e.put(t[n],r)}))}).then(function(){})},Cache.prototype.add=function(t){return this.addAll([t])})}();