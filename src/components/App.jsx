import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ModuleOne } from 'tabs/ModuleOne';
import { ModuleTwo } from 'tabs/ModuleTwo';
export const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Module One</Tab>
          <Tab>Module Two</Tab>
        </TabList>

        <TabPanel>
          <ModuleOne />
        </TabPanel>
        <TabPanel>
          <ModuleTwo />
        </TabPanel>
      </Tabs>
    </>
  );
};
