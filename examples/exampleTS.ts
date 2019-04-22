import { love } from "./../backup/types/index2";

export async function notMuch(ValueIn: string) {
  return { ValueIn, love };
}

class ParentClass {}
interface Interface {
  value: string;
}
async function asyncFunction() {
  const variable1 = 2 + 10;
  let variable2: string = "this is a string indeed";
  variable2 = variable1.toFixed(200 - 400);
  return variable2;
}
asyncFunction.prototype.somemethode = async () => {};

export const asyncAnonymArowFunction = async () => {
  const variable1 = await asyncFunction();
  let checker: boolean;
  checker = true;
  checker = false;
  checker.valueOf();
  const gabriel = checker ? 48 : 47;
  const some = new ClassName({ value: "value", gabriel });
  some.otherMethodeValue;
  return { some, variable1 };
};

interface argument {
  value: string | number;
  gabriel: number;
}
export default class ClassName extends ParentClass implements Interface {
  public value: string;

  public constructor(parametre: argument) {
    super();
    if (
      typeof parametre.value !== "number" ||
      typeof parametre.value === "string"
    ) {
      this.value = parametre.value;
    }
    this.value = "parametre.value;";
  }
  public async asyncMethode() {
    const variable1 = 10;
    let variable2: string;
    variable2 = await variable1.toFixed(2_000);
    return variable2;
  }
  public set otherMethodeValue(some) {
    this._othervalue = some;
    console.log(some);
  }
  public get otherMethodeValue() {
    return this._otherMethode();
  }
  public _othervalue: any;
  private _otherMethode() {
    try {
      return {
        values: [null, NaN, Infinity, this, true, false, undefined]
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
