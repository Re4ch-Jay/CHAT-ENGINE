import React from 'react'
import Navbar from '../components/Navbar'
import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
} from 'react-chat-engine'


const Chats = (props) => {
  return (
    <div>
      <Navbar/> 
      <ChatEngine
        height='100vh'
        projectID="a4a430b9-0092-4116-8b22-b66a5b93a7ef" 
        userName="panhareach.phat@student.cadt.edu.kh" 
        userSecret="18102003"
        development={props.development} 
        // Customize UI
        renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
        renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
        renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
        renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
        renderChatHeader={(chat) => <ChatHeader />}
        renderIceBreaker={(chat) => <IceBreaker />}
        renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
        renderIsTyping={(typers) => <IsTyping />}
        
        renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
        renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
        renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
        renderPeopleSettings={(creds, chat) => <PeopleSettings />}
        renderPhotosSettings={(chat) => <PhotosSettings />}
        renderOptionsSettings={(creds, chat) => <OptionsSettings />}
      />

      
    </div>
  )
}

export default Chats



// <div className="flex mt-">
//         <div className="flex-1 items-center w-32 border border-left">
//           <h3 className='text-xl font-bold text-center mt-10' style={{fontSize: '30px'}}>ALL CHATS</h3>
//           <ul class="max-w-md divide-y py-10" style={{paddingLeft: '20px'}}>
//             <li class="pb-3 sm:pb-4 py-3">
//                 <div class="flex items-center space-x-4">
//                   <div class="flex-shrink-0">
//                       <img class="w-20 h-20 rounded-full" src="https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg" alt="Neil image"/>
//                   </div>
//                   <div class="flex-1 min-w-0">
//                       <p class="text-lg font-medium truncate">
//                         Neil Sims
//                       </p>
//                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
//                         email@flowbite.com
//                       </p>
//                   </div>
//                   <div class="inline-flex items-center text-base font-semibold">
//                       10 Jan 2023
//                   </div>
//                 </div>
//             </li>
//             <li class="pb-3 sm:pb-4">
//                 <div class="flex items-center space-x-4">
//                   <div class="flex-shrink-0">
//                       <img class="w-20 h-20 rounded-full" src="https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg" alt="Neil image"/>
//                   </div>
//                   <div class="flex-1 min-w-0">
//                       <p class="text-lg font-medium truncate">
//                         Neil Sims
//                       </p>
//                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
//                         email@flowbite.com
//                       </p>
//                   </div>
//                   <div class="inline-flex items-center text-base font-semibold">
//                       10 Jan 2023
//                   </div>
//                 </div>
//             </li>
//             <li class="pb-3 sm:pb-4">
//                 <div class="flex items-center space-x-4">
//                   <div class="flex-shrink-0">
//                       <img class="w-20 h-20 rounded-full" src="https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg" alt="Neil image"/>
//                   </div>
//                   <div class="flex-1 min-w-0">
//                       <p class="text-lg font-medium truncate">
//                         Neil Sims
//                       </p>
//                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
//                         email@flowbite.com
//                       </p>
//                   </div>
//                   <div class="inline-flex items-center text-base font-semibold">
//                       10 Jan 2023
//                   </div>
//                 </div>
//             </li>
//             <li class="pb-3 sm:pb-4">
//                 <div class="flex items-center space-x-4">
//                   <div class="flex-shrink-0">
//                       <img class="w-20 h-20 rounded-full" src="https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg" alt="Neil image"/>
//                   </div>
//                   <div class="flex-1 min-w-0">
//                       <p class="text-lg font-medium truncate">
//                         Neil Sims
//                       </p>
//                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
//                         email@flowbite.com
//                       </p>
//                   </div>
//                   <div class="inline-flex items-center text-base font-semibold">
//                       10 Jan 2023
//                   </div>
//                 </div>
//             </li>
//             <li class="pb-3 sm:pb-4">
//                 <div class="flex items-center space-x-4">
//                   <div class="flex-shrink-0">
//                       <img class="w-20 h-20 rounded-full" src="https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg" alt="Neil image"/>
//                   </div>
//                   <div class="flex-1 min-w-0">
//                       <p class="text-lg font-medium truncate">
//                         Neil Sims
//                       </p>
//                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
//                         email@flowbite.com
//                       </p>
//                   </div>
//                   <div class="inline-flex items-center text-base font-semibold">
//                       10 Jan 2023
//                   </div>
//                 </div>
//             </li>
//             <li class="pb-3 sm:pb-4">
//                 <div class="flex items-center space-x-4">
//                   <div class="flex-shrink-0">
//                       <img class="w-20 h-20 rounded-full" src="https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg" alt="Neil image"/>
//                   </div>
//                   <div class="flex-1 min-w-0">
//                       <p class="text-lg font-medium truncate">
//                         Neil Sims
//                       </p>
//                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
//                         email@flowbite.com
//                       </p>
//                   </div>
//                   <div class="inline-flex items-center text-base font-semibold">
//                       10 Jan 2023
//                   </div>
//                 </div>
//             </li>
//           </ul>
//         </div>
//         <div className="flex-auto w-64 border border-left">
          
//         </div>
//         <div className="flex-1 w-32">
          
//         </div>
//       </div>