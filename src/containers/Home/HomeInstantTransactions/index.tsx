import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Button} from 'components';

import HomeComparisonCards from 'containers/Home/HomeComparisonCards';

import './HomeInstantTransactions.scss';

const HomeInstantTransactions: FC = () => {
  return (
    <div className="HomeInstantTransactions">
      <div className="HomeInstantTransactions__content-container">
        <div className="HomeInstantTransactions__mini-text">INSTANT TRANSACTIONS</div>
        <h1 className="HomeInstantTransactions__title">Say goodbye to 10 minute block times</h1>
        <div className="HomeInstantTransactions__text-snippets">
          <div className="HomeInstantTransactions__text-snippets-left-block">
            <p>
              We rebuilt the Blockchain from the ground up. We kissed those outdated PoW and PoS algorithms goodbye and
              replaced them with an innovative trust based architecture.
            </p>
            <NavLink className="HomeInstantTransactions__content-container--display-large" to="/guide/introduction">
              <Button>View Docs</Button>
            </NavLink>
          </div>
          <div className="HomeInstantTransactions__text-snippets-right-block">
            <p>
              Get in on the ground floor as we reinvent digital currency and build the world's first instant,
              peer-to-peer, open source payment network.
            </p>
            <p>
              <b>Now in alpha!</b>
            </p>
            <NavLink className="HomeInstantTransactions__content-container--display-small" to="/guide/introduction">
              <Button>View Docs</Button>
            </NavLink>
          </div>
        </div>
        <HomeComparisonCards />
      </div>
    </div>
  );
};

export default HomeInstantTransactions;
