import mobiscroll from '@mobiscroll/react';
import './App.css';

class AppItem extends React.Component {
    render = () => {
        var app = this.props.app;
        return <mobiscroll.Card theme="ios"  themeVariant="light">
                    <mobiscroll.CardContent>
                        <img className="md-img" src={app.image} draggable="false" />
                        <mobiscroll.CardTitle>{app.title}</mobiscroll.CardTitle>
                        <mobiscroll.CardSubtitle>{app.dev}</mobiscroll.CardSubtitle>
                        <div className="md-rank">{app.rank}<span className="mbsc-ic mbsc-ic-star3"></span></div>
                    </mobiscroll.CardContent>
                </mobiscroll.Card>;
    }
}

class App extends React.Component {
    render = () => {
        return  <div className="md-cards">
            <div className="md-card-cont">
                <h3>New & Updated Games</h3>
                <mobiscroll.ScrollView className="demo-card" layout="fixed" itemWidth={134} snap={false} theme="ios"  themeVariant="light">
                    {this.props.newGames.map(function(app) {
                        return <AppItem app={app} key={app.id} />;
                    })}
                </mobiscroll.ScrollView>
                
                <h3>Media & Video Apps</h3>
                <mobiscroll.ScrollView className="demo-card" layout="fixed" itemWidth={134} snap={false} theme="ios"  themeVariant="light">
                    {this.props.mediaVideo.map(function(app) {
                        return <AppItem app={app} key={app.id} />;
                    })}
                </mobiscroll.ScrollView>
                
                <h3>New & Updated Apps</h3>
                <mobiscroll.ScrollView className="demo-card" layout="fixed" itemWidth={134} snap={false} theme="ios"  themeVariant="light">
                    {this.props.newUpdated.map(function(app) {
                        return <AppItem app={app} key={app.id} />;
                    })}
                </mobiscroll.ScrollView>
            </div>
        </div>;
    }
    
    static defaultProps = {
        newGames: [{
            id: 1,
            image: 'https://img.mobiscroll.com/demos/worms3.png',
            title: 'Worms 3',
            dev: 'Team 17 Digital Limited',
            rank: 4.2
        }, {
            id: 2,
            image: 'https://img.mobiscroll.com/demos/candycrush.png',
            title: 'Candy Crush Saga',
            dev: 'King',
            rank: 4.3
        }, {
            id: 3,
            image: 'https://img.mobiscroll.com/demos/angrybirds.png',
            title: 'Angry Birds',
            dev: 'Rovino',
            rank: 4.4
        }, {
            id: 4,
            image: 'https://img.mobiscroll.com/demos/nfs.png',
            title: 'Need for Speed™ No Limits',
            dev: 'ELECTRONIC ARTS',
            rank: 4.3
        }, {
            id: 5,
            image: 'https://img.mobiscroll.com/demos/heartstone.png',
            title: 'Hearthstone',
            dev: 'Blizzard Entertainment Inc.',
            rank: 4.2
        }, {
            id: 6,
            image: 'https://img.mobiscroll.com/demos/fruitninja.png',
            title: 'Fruit Ninja',
            dev: 'Halfbrick Studios',
            rank: 4.3
        }, {
            id: 7,
            image: 'https://img.mobiscroll.com/demos/subwaysurf.png',
            title: 'Subway Surfers',
            dev: 'Kiloo',
            rank: 4.4
        }, {
            id: 8,
            image: 'https://img.mobiscroll.com/demos/templerun.png',
            title: 'Temple Run',
            dev: 'Imangi Studios',
            rank: 4.3
        }, {
            id: 9,
            image: 'https://img.mobiscroll.com/demos/minecraft.png',
            title: 'Minecraft: Pocket Edition',
            dev: 'Mojang ',
            rank: 4.4
        }],
        mediaVideo: [{
            id: 1,
            image: 'https://img.mobiscroll.com/demos/vlc.png',
            title: 'VLC for Android',
            dev: 'Videolabs ',
            rank: 4.3
        }, {
            id: 2,
            image: 'https://img.mobiscroll.com/demos/realplayer.png',
            title: 'RealPlayer®',
            dev: 'RealNetworks, Inc.',
            rank: 4.3
        }, {
            id: 3,
            image: 'https://img.mobiscroll.com/demos/motogal.png',
            title: 'Motorola Gallery',
            dev: 'Motorola Mobility LLC. ',
            rank: 3.9
        }, {
            id: 4,
            image: 'https://img.mobiscroll.com/demos/revesemov.png',
            title: 'Reverse Movie FX',
            dev: 'Bizo Mobile',
            rank: 4.6
        }, {
            id: 5,
            image: 'https://img.mobiscroll.com/demos/sure.png',
            title: 'SURE Universal Remote',
            dev: 'Tekoia Ltd.',
            rank: 4.4
        }, {
            id: 6,
            image: 'https://img.mobiscroll.com/demos/ringdriod.png',
            title: 'Ringdroid',
            dev: 'Ringdroid Team ',
            rank: 4.4
        }, {
            id: 7,
            image: 'https://img.mobiscroll.com/demos/funny.png',
            title: 'Funny Camera - Video Booth Fun',
            dev: 'Kiloo',
            rank: 4.1
        }, {
            id: 8,
            image: 'https://img.mobiscroll.com/demos/gif.png',
            title: 'GIF Keyboard',
            dev: 'IRiffsy, Inc.',
            rank: 4.1
        }, {
            id: 9,
            image: 'https://img.mobiscroll.com/demos/bs.png',
            title: 'BSPlayer',
            dev: 'BSPlayer media',
            rank: 4.4
        }, {
            id: 10,
            image: 'https://img.mobiscroll.com/demos/vac.png',
            title: 'video audio cutter',
            dev: 'mytechnosound ',
            rank: 4.3
        }],
        newUpdated: [{
            id: 1,
            image: 'https://img.mobiscroll.com/demos/netflix.png',
            title: 'Netflix',
            dev: 'Netflix, Inc. ',
            rank: 4.4
        }, {
            id: 2,
            image: 'https://img.mobiscroll.com/demos/colorfy.png',
            title: 'Colorfy - Coloring Book Free',
            dev: 'Fun Games For Free',
            rank: 4.7
        }, {
            id: 3,
            image: 'https://img.mobiscroll.com/demos/wego.png',
            title: 'Wego Flights & Hotels',
            dev: 'Wego.com',
            rank: 4.3
        }, {
            id: 4,
            image: 'https://img.mobiscroll.com/demos/ali.png',
            title: 'Alibaba.com B2B Trade App',
            dev: 'Alibaba.com Hong Kong Limited ',
            rank: 4.1
        }, {
            id: 5,
            image: 'https://img.mobiscroll.com/demos/5k.png',
            title: '5K Run: 5K Runner®',
            dev: 'Fitness22',
            rank: 4.4
        }, {
            id: 6,
            image: 'https://img.mobiscroll.com/demos/nuzzelnws.png',
            title: 'Nuzzel News',
            dev: 'Nuzzel, Inc.',
            rank: 4.3
        }, {
            id: 7,
            image: 'https://img.mobiscroll.com/demos/solarsysexpl.png',
            title: 'Solar System Explorer 3D',
            dev: 'Neil Burlock',
            rank: 4.5
        }, {
            id: 8,
            image: 'https://img.mobiscroll.com/demos/elevate.png',
            title: 'Elevate - Brain Training',
            dev: 'Elevate Labs',
            rank: 4.5
        }, {
            id: 9,
            image: 'https://img.mobiscroll.com/demos/deezer.png',
            title: 'Deezer Music',
            dev: 'Deezer Mobile',
            rank: 4.1
        }]
    };
}
