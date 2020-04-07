// playground file !!!!
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return ` The color of the Boat is ${this.color}`;
  }

  @logError('Error In pilot amir is here!')
  pilot(): void {
    throw new Error();
    console.log('Pilot ...');
  }
}
function testDecorator(target: any, key: string) {
  console.log('traget', target);
  console.log('key', key);
}

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

new Boat().pilot();
