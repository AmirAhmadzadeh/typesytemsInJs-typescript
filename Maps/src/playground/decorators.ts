// playground file
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return ` The color of the Boat is ${this.color}`;
  }

  @logError('Error In pilot (amir is here)!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator getSpeed: boolean
  ): void {
    // throw new Error();
    // console.log('Pilot ...');
    if (speed === 'fast') {
      console.log('speed is very very not fast');
    } else {
      console.log('speed is not fast');
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log('target is : ', target);
  console.log('key : ', key);
  console.log('Index of Arguments ', index);
}

function testDecorator(target: any, key: string) {
  console.log('traget', target);
}
console.log('key', key);

function logError(errMsg: string) {
  return (target: any, key: string, des: PropertyDescriptor) => {
    const method = des.value;
    try {
      method();
    } catch (error) {
      console.log(errMsg);
    }
  };
}

new Boat().pilot('fast', false);

// const logError = (err: string) => (
//   target: any,
//   key: string,
//   des: PropertyDescriptor
// ) => {
//   const method = des.value;
//   des.value = function () {
//     try {
//       method();
//     } catch (error) {
//       console.log(err);
//     }
//   };
// };
