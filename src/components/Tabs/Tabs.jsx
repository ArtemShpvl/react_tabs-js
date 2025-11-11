import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div className="tabs is-boxed" data-cy="TabsComponent">
    <ul>
      {tabs.map(tab => (
        <button
          type="button"
          className={activeTabId === tab.id ? 'is-active' : ''}
          data-cy="Tab"
          onClick={() => onTabSelected(tab.id)}
        >
          <a href={`#${tab.id}`} data-cy="TabLink">
            {tab.title}
          </a>
        </button>
      ))}
    </ul>
  </div>
);
