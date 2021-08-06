import React from 'react';
import { Button, Icon, Search } from 'semantic-ui-react';

class HeaderLayout extends React.Component {
    render() {
        const { handleTabChange, activeTab, SearchHandler, isLoading } = this.props;
       
        return (

            <div className="menu">
                <div className="headLeft">
                    <span className="tickets_span"><b>Tickets</b></span>
                    <Button
                        className={activeTab === 'all' ? 'active' : ''}
                        onClick={() => handleTabChange('all')}
                    >
                        ALL
                    </Button>
                    <Button
                        className={activeTab === 'myTickets' ? 'active' : ''}
                        onClick={() => handleTabChange('myTickets')}
                    >
                        ONLY MY TICKETS
                     </Button>
                    <Button
                        className={activeTab === 'updated' ? 'active' : ''}
                        onClick={() => handleTabChange('updated')}
                    >RECENTLY UPDATED
                     </Button>
                    <Button className="miniBtn">
                        <Icon name='filter' className="icon" />
                    </Button>
                    <Button className="miniBtn">
                        <Icon name="sync" className="icon" />
                    </Button>
                </div>
                <div className="headRight">
                    <div>
                        <Search
                            fluid
                            loading={isLoading}
                            className="searchTicket"
                            onSearchChange={SearchHandler}
                            placeholder="Search"
                        />
                    </div>
                    <div>
                        <Button><Icon name='setting' className="icon" />Configurations</Button>
                    </div>
                    <div className="page_no">(0-30)</div>
                    <div>
                        <Button className="miniBtn"><Icon name='angle left' className="icon" /></Button>
                        <Button className="miniBtn"><Icon name='angle right' className="icon" /></Button>
                    </div>
                </div>
            </div>

        )
    }
}

export default HeaderLayout;