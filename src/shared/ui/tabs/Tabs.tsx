import { useEffect, useState } from 'react';
import type { FC } from 'react';

type TabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const Tabs: FC<TabsProps> = ({ activeTab: activeTabProp, onTabChange }) => {
  type Onglet = 'tous' | 'mes' | 'favoris';
  const [activeTab, setActiveTab] = useState<Onglet>(activeTabProp as Onglet);
  useEffect(() => {
    onTabChange(activeTab);
  }, [activeTab, onTabChange]);

  return (
    <div className="tabs tabs-boxed m-4 bg-base-200">
      <button
        className={`tab ${activeTab === 'tous' ? 'tab-active' : ''}`}
        onClick={() => setActiveTab('tous')}
      >
        Tous les livres
      </button>
      <button
        className={`tab ${activeTab === 'mes' ? 'tab-active' : ''}`}
        onClick={() => setActiveTab('mes')}
      >
        Mes livres
      </button>
      <button
        className={`tab ${activeTab === 'favoris' ? 'tab-active' : ''}`}
        onClick={() => setActiveTab('favoris')}
      >
        Livres favoris
      </button>
    </div>
  );
};

export default Tabs;
