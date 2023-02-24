
/**
 * RequiredField
 * @desc Transform field from original type to required state
 * 
 * @example
 * interface SomeOptions {
 *   data: Record<string, unknown>;
 *   options?: unknown; 
 * }
 *
 * // Expect: Property 'options' is missing in type '{ data: {}; }' but required in type 'Required<Pick<SomeOptions, "options">>'
 * const MyType: RequiredField<SomeOptions, 'options'> = {
 *    data: {},
 * }
 */
export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;
