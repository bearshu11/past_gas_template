/**
[howdy39/gas-clasp-starter]

Copyright (c) 2018 Tatsuya Nakano. All rights reserved.

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

export const getDayFormat = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
