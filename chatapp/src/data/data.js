import uuid from 'uuid';
import moment from 'moment';

export const data = {
		activeThreadId: '1-fca2', // New state property
		threads: [ // Two threads in state
			{
				id: '1-fca2', // hardcoded pseudo-UUID
				title: 'Buzz Aldrin',
				messages: [
					{ // This thread starts with a single message already
						text: 'Twelve minutes to ignition.',
						timestamp: moment(Date.now()),
						id: uuid.v4(),
					},
				],
			},
		{
				id: '2-be91',
				title: 'Michael Collins',
				messages: [],
			},
		],
	};
  

