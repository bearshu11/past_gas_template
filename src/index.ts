/**
[howdy39/gas-clasp-starter]

Copyright (c) 2018 Tatsuya Nakano. All rights reserved.

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

import { SheetService } from './sheet.service';

declare var global: any;

global.createNewFile = (): void => {
  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!');
};
