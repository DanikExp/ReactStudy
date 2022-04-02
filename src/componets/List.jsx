import './List.css';
import React from "react";

function List() {
    const [activeId, setActiveId] = React.useState(1);

    const Tab = ({name, activeId}) => {
        let active_class = "tab";
        if (name.id === activeId) {
            active_class += " active"
        }
        return (
                <div className={active_class}>
                    <input id={name.id} type="checkbox" name="tabs"/>
                    <label onClick={() => activeTab(name, activeId)} htmlFor={"tab" + name.id}>{name.title}</label>#000000
                    <div className="tab-content">
                        <p>{name.description}</p>
                    </div>
                </div>
        )
    }

    const tabs = [
        {
            id: 1,
            title: 'Сколько всего мест в доме?',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!',
        },
        {
            id: 2,
            title: 'Самая дорогая квартира?',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.',
        },
        {
            id: 3,
            title: 'Могу ли я отменить бронирование?',
            description: 'Да, вы можете отменить забронированную квартиру в течение 3 дней.',
        },
        {
            id: 4,
            title: 'Можно ли купить квартиру?',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.',
        },
    ];

    const activeTab = (name) => {
        if (activeId === name.id) {
            setActiveId(0);
        } else setActiveId(name.id);
    }

    return (
        <div id="app">
            <div className="app-container">
                <h1 className="app-title">FAQ</h1>
                <div className="app-tabs">
                    {tabs.map((obj, index) => <Tab key={index} name={obj} activeId={activeId}/>)}
                </div>
            </div>
        </div>

    );
}

export default List;

