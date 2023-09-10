import { easepick, TimePlugin } from '@easepick/bundle';

function datePicker() {

const picker = new easepick.create({
    element: document.getElementById('datePicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
          'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
        ],
        
        plugins: [TimePlugin],
        TimePlugin: {
            format: 'HH:mm',
          },
        
      });
}

export default datePicker;


