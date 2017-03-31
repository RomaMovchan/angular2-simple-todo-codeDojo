
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb(){
		 const todos = [
			{
				id: 1,
				title:'learnJS',
				completed: true
			},
			{
				id: 2,
				title:'learn Angular2',
				completed: false
			},
			{
				id: 3,
				title:'write app',
				completed: true
			}
		];

		return {todos};
	}
}

