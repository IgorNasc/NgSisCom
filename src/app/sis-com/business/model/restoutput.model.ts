export class RestOutput<T>{
  listEntity: Array<T>;
	listError: Array<String>;
	listWarn: Array<String>;
  status: number;
}
