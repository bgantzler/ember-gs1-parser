import Service from '@ember/service';
import {
  parseBarcode,
  partsToData,
  FNC1,
} from 'ember-gs1-parser/utils/gs1-barcode-parser';

export default class BarcodeParserService extends Service {
  /**
   * Group separator is an array of strings that could represent a group separator
   **
   * @type {string[]}
   */
  groupSeparators = ['@'];

  constructor() {
    super(...arguments);
  }

  replaceSeparators(barcode) {
    this.groupSeparators.forEach((sep) => {
      barcode = barcode.replaceAll(sep, FNC1);
    });
    return barcode;
  }

  /**
   *
   * @param AIs Array
   * @returns Object
   */
  partsToData = partsToData;

  /**
   *
   * @param barcode
   * @return [] of AIs
   */
  parseBarcode = parseBarcode;
}
