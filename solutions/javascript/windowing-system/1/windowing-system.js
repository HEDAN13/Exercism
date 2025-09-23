// @ts-check

import { log } from "console";

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * @param {number} newWidth
 * @param {number} newHeight
 */

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 *
 * @param {number} newX
 * @param {number} newY
 */

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   *
   * @param {Size} newSize
   */

  resize(newSize) {
    if (
      newSize.width > 1 &&
      newSize.width <= this.screenSize.width - this.position.x
    ) {
      this.size.width = newSize.width;
    } else if (newSize.width <= 1) {
      this.size.width = 1;
    } else {
      this.size.width = this.screenSize.width - this.position.x;
    }

    if (
      newSize.height > 1 &&
      newSize.height <= this.screenSize.height - this.position.y
    ) {
      this.size.height = newSize.height;
    } else if (newSize.height <= 1) {
      this.size.height = 1;
    } else {
      this.size.height = this.screenSize.height - this.position.y;
    }
  }

  /**
   *
   * @param {Position} newPosition
   */
  move(newPosition) {
    if (
      newPosition.x >= 0 &&
      newPosition.x <= this.screenSize.width - this.size.width
    ) {
      this.position.x = newPosition.x;
    } else if (newPosition.x < 0) {
      this.position.x = 0;
    } else {
      this.position.x = this.screenSize.width - this.size.width;
    }

    if (
      newPosition.y >= 0 &&
      newPosition.y <= this.screenSize.height - this.size.height
    ) {
      this.position.y = newPosition.y;
    } else if (newPosition.y < 0) {
      this.position.y = 0;
    } else {
      this.position.y = this.screenSize.height - this.size.height;
    }
  }
}

/**
 *
 * @param {ProgramWindow} newWindow
 * @returns ProgramWindow
 */
export function changeWindow(newWindow) {
  let position = new Position();
  newWindow.move(position);

  let size = new Size(1, 1);
  newWindow.resize(size);

  position.move(100, 150);
  newWindow.move(position);

  size.resize(400, 300);
  newWindow.resize(size);

  return newWindow;
}
