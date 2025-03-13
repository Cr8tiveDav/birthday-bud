import { useState } from 'react';
import { data } from '../data';
import Person from './Person';

const List = () => {
  const [list, setList] = useState(data);
  const totalBirthdays = list.length;
  return (
    <>
      <main>
        <div className="container">
          <h3>
            {totalBirthdays} {totalBirthdays > 0 ? 'birthdays' : 'birthday'}{' '}
            today
          </h3>
          {list.map((item) => {
            console.log(item);
            return (
              <div className="person" key={item.id}>
                <Person {...item} />
              </div>
            );
          })}
          <button type="button" className="btn" onClick={() => setList([])}>
            clear all
          </button>
        </div>
      </main>
    </>
  );
};
export default List;
