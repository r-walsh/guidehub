import NavBar from './components/navBar';
import Footer from './components/footer';
import ProfileInfo from './components/profileInfo';
import TabsList from './components/tabsList';
import GuideInfoCard from './components/guideInfoCard';

export default class Profile extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<ProfileInfo />
				<TabsList />
				<GuideInfoCard author="Ryan Walsh" title="GuideHub" favorites="97" difficulty="75%" />
				<Footer />
			</div>
		);
	};
};

// renderTabContent() {
//     switch( this.state.selectedTab ) {
//         case "myGuides":
//             return <MyGuides />;
//         case "starredGuides":
//             return <StarredGuides />;
//         case "settings":
//             return <Settings />;
//     }
// }

// <Tabs>
//     <TabList>
//         <Tab>My Guides</Tab>
//         <Tab>Starred Guides</Tab>
//         <Tab>Settings</Tab>
//     </TabList>
//     <TabContent>
//         {this.renderTabContent()}
//     </TabContent>
// </Tabs>