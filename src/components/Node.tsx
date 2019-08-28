import { tsParenthesizedType } from "@babel/types";

export default class Node {
  private _data: number;
  private _left?: Node;
  private _right?: Node;

  constructor(_data: number) {
    this._data = _data;
  }

  public insert(data: number) {
    if (data < this._data && this._left) {
      this._left.insert(data); //recursive if left node exists then go down to next child
    } else if (data < this._data) {
      this._left = new Node(data); //if left node doesn't exist, assign new left node
    } else if (data > this._data && this._right) {
      this._right.insert(data); //recursive for right
    } else if (data > this._data) {
      this._right = new Node(data); //right insert new node
    }
  }

  public contains(data: number) {
    if (this._data === data) {
      return this;
    }

    if (this._data < data && this._right) {
       this._right.contains(data);
       console.log("yes")
    } else if (this._data > data && this._left) {
       this._left.contains(data);
       console.log("no")
    }

    return null;
  }
}
