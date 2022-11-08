import React, { useState } from 'react';
import { Card, Divider, Box } from '@mui/material';
import Breadcrumb from '../../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChatSidebar from '../../../components/apps/chats/ChatSidebar';
import ChatContent from '../../../components/apps/chats/ChatContent';
import ChatMsgSent from '../../../components/apps/chats/ChatMsgSent';
import PlantSelect from '../../../components/forms/fb-elements/PlantSelect';
import UnitSelect from '../../../components/forms/fb-elements/UnitSelect';
import FbRBIPlant from '../../../components/forms/fb-elements/FbRBIPlant';


const Chats = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);

  return (
    <PageContainer title="Chat ui" description="this is Chat page">
      <Breadcrumb title="Risk Profile Module" subtitle="Plant Level" />
      <Card sx={{ display: 'flex', p: 0 }}>
        {/* <ChatSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        <Box flexGrow={1}>
          <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
          <Divider />
          <ChatMsgSent />
        </Box> */}
        
      </Card>
      {/* <PlantSelect/>
      <div style={{height:7}}>

      </div>
      <UnitSelect/>
      <div style={{height:7}}>

      </div> */}
      <FbRBIPlant/>
    </PageContainer>
  );
};

export default Chats;
