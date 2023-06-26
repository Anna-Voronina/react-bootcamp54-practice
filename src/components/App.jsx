import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Gallery } from 'tabs/Gallery';

import { ModuleOne } from 'tabs/ModuleOne';
import { ModuleToDo } from 'tabs/ModuleToDo';
import { ModuleTwo } from 'tabs/ModuleTwo';
export const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Module One</Tab>
          <Tab>Module Two</Tab>
          <Tab>Module ToDo</Tab>
          <Tab>Gallery</Tab>
        </TabList>

        <TabPanel>
          <ModuleOne />
        </TabPanel>
        <TabPanel>
          <ModuleTwo />
        </TabPanel>
        <TabPanel>
          <ModuleToDo />
        </TabPanel>
         <TabPanel>
          <Gallery />
        </TabPanel>
      </Tabs>
    </>
  );
};
