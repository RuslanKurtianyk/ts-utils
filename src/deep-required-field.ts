/**
 * DeepRequired
 * @desc Transform all fields to required state in object or array (including nested)
 * 
 * @example
 *   // Expect: {
 *   //   prop: {
 *   //     NestedProps: {
 *   //       data: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     prop?: {
 *       nestedProp?: {
 *         data?: string;
 *       };
 *     };
 *   };
 *   type RequiredNestedPropertiess = DeepRequired<NestedProps>;
 */
export type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? DeepArrayRequired<T[number]>
  : T extends object
  ? DeepObjectRequired<T>
  : T;

export interface DeepArrayRequired<T>
  extends Array<DeepRequired<T extends undefined ? never : T>> {}

export type DeepObjectRequired<T> = {
  [P in keyof T]-?: DeepRequired<T[P] extends undefined ? never : T[P]>;
};