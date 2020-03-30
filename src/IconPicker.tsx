import * as React from 'react';
import './css/IconPicker.css';

// Declaration of the component as React Class Component
export default class IconPicker extends React.Component<any, any> {

    icons: any = {};

    selectedItem: string;

    onchange(e: any) {
        this.selectedItem = e.target.innerText;
        if (this.props.onChange) {
            this.props.onChange(this.selectedItem);
        }
        this.forceUpdate();
    }

    constructor(props: any) {
        super(props);
        this.selectedItem = this.props.onChangeValue;
        this.onchange = this.onchange.bind(this);
        this.addIcon = this.addIcon.bind(this);
        this.addIcons = this.addIcons.bind(this);
        this.addIcons();
    }

    addIcons() {
        this.addIcon("asterisk","Asterisk");
        this.addIcon("plus","Plus");
        this.addIcon("minus","Minus");
        this.addIcon("eur","Eur");
        this.addIcon("euro","Euro");
        this.addIcon("cloud","Cloud");
        this.addIcon("envelope","Envelope");
        this.addIcon("pencil","Pencil");
        this.addIcon("glass","Glass");
        this.addIcon("music","Music");
        this.addIcon("search","Search");
        this.addIcon("heart","Heart");
        this.addIcon("star","Star");
        this.addIcon("star-empty","Star Empty");
        this.addIcon("user","User");
        this.addIcon("film","Film");
        this.addIcon("th-large","Th Large");
        this.addIcon("th","Th");
        this.addIcon("th-list","Th List");
        this.addIcon("ok","Ok");
        this.addIcon("remove","Remove");
        this.addIcon("zoom-in","Zoom In");
        this.addIcon("zoom-out","Zoom Out");
        this.addIcon("off","Off");
        this.addIcon("signal","Signal");
        this.addIcon("cog","Cog");
        this.addIcon("trash","Trash");
        this.addIcon("home","Home");
        this.addIcon("file","File");
        this.addIcon("time","Time");
        this.addIcon("road","Road");
        this.addIcon("download-alt","Download Alt");
        this.addIcon("download","Download");
        this.addIcon("upload","Upload");
        this.addIcon("inbox","Inbox");
        this.addIcon("play-circle","Play Circle");
        this.addIcon("repeat","Repeat");
        this.addIcon("refresh","Refresh");
        this.addIcon("list-alt","List Alt");
        this.addIcon("lock","Lock");
        this.addIcon("flag","Flag");
        this.addIcon("headphones","Headphones");
        this.addIcon("volume-off","Volume Off");
        this.addIcon("volume-down","Volume Down");
        this.addIcon("volume-up","Volume Up");
        this.addIcon("qrcode","Qrcode");
        this.addIcon("barcode","Barcode");
        this.addIcon("tag","Tag");
        this.addIcon("tags","Tags");
        this.addIcon("book","Book");
        this.addIcon("bookmark","Bookmark");
        this.addIcon("print","Print");
        this.addIcon("camera","Camera");
        this.addIcon("font","Font");
        this.addIcon("bold","Bold");
        this.addIcon("italic","Italic");
        this.addIcon("text-height","Text Height");
        this.addIcon("text-width","Text Width");
        this.addIcon("align-left","Align Left");
        this.addIcon("align-center","Align Center");
        this.addIcon("align-right","Align Right");
        this.addIcon("align-justify","Align Justify");
        this.addIcon("list","List");
        this.addIcon("indent-left","Indent Left");
        this.addIcon("indent-right","Indent Right");
        this.addIcon("facetime-video","Facetime Video");
        this.addIcon("picture","Picture");
        this.addIcon("map-marker","Map Marker");
        this.addIcon("adjust","Adjust");
        this.addIcon("tint","Tint");
        this.addIcon("edit","Edit");
        this.addIcon("share","Share");
        this.addIcon("check","Check");
        this.addIcon("move","Move");
        this.addIcon("step-backward","Step Backward");
        this.addIcon("fast-backward","Fast Backward");
        this.addIcon("backward","Backward");
        this.addIcon("play","Play");
        this.addIcon("pause","Pause");
        this.addIcon("stop","Stop");
        this.addIcon("forward","Forward");
        this.addIcon("fast-forward","Fast Forward");
        this.addIcon("step-forward","Step Forward");
        this.addIcon("eject","Eject");
        this.addIcon("chevron-left","Chevron Left");
        this.addIcon("chevron-right","Chevron Right");
        this.addIcon("plus-sign","Plus Sign");
        this.addIcon("minus-sign","Minus Sign");
        this.addIcon("remove-sign","Remove Sign");
        this.addIcon("ok-sign","Ok Sign");
        this.addIcon("question-sign","Question Sign");
        this.addIcon("info-sign","Info Sign");
        this.addIcon("screenshot","Screenshot");
        this.addIcon("remove-circle","Remove Circle");
        this.addIcon("ok-circle","Ok Circle");
        this.addIcon("ban-circle","Ban Circle");
        this.addIcon("arrow-left","Arrow Left");
        this.addIcon("arrow-right","Arrow Right");
        this.addIcon("arrow-up","Arrow Up");
        this.addIcon("arrow-down","Arrow Down");
        this.addIcon("share-alt","Share Alt");
        this.addIcon("resize-full","Resize Full");
        this.addIcon("resize-small","Resize Small");
        this.addIcon("exclamation-sign","Exclamation Sign");
        this.addIcon("gift","Gift");
        this.addIcon("leaf","Leaf");
        this.addIcon("fire","Fire");
        this.addIcon("eye-open","Eye Open");
        this.addIcon("eye-close","Eye Close");
        this.addIcon("warning-sign","Warning Sign");
        this.addIcon("plane","Plane");
        this.addIcon("calendar","Calendar");
        this.addIcon("random","Random");
        this.addIcon("comment","Comment");
        this.addIcon("magnet","Magnet");
        this.addIcon("chevron-up","Chevron Up");
        this.addIcon("chevron-down","Chevron Down");
        this.addIcon("retweet","Retweet");
        this.addIcon("shopping-cart","Shopping Cart");
        this.addIcon("folder-close","Folder Close");
        this.addIcon("folder-open","Folder Open");
        this.addIcon("resize-vertical","Resize Vertical");
        this.addIcon("resize-horizontal","Resize Horizontal");
        this.addIcon("hdd","Hdd");
        this.addIcon("bullhorn","Bullhorn");
        this.addIcon("bell","Bell");
        this.addIcon("certificate","Certificate");
        this.addIcon("thumbs-up","Thumbs Up");
        this.addIcon("thumbs-down","Thumbs Down");
        this.addIcon("hand-right","Hand Right");
        this.addIcon("hand-left","Hand Left");
        this.addIcon("hand-up","Hand Up");
        this.addIcon("hand-down","Hand Down");
        this.addIcon("circle-arrow-right","Circle Arrow Right");
        this.addIcon("circle-arrow-left","Circle Arrow Left");
        this.addIcon("circle-arrow-up","Circle Arrow Up");
        this.addIcon("circle-arrow-down","Circle Arrow Down");
        this.addIcon("globe","Globe");
        this.addIcon("wrench","Wrench");
        this.addIcon("tasks","Tasks");
        this.addIcon("filter","Filter");
        this.addIcon("briefcase","Briefcase");
        this.addIcon("fullscreen","Fullscreen");
        this.addIcon("dashboard","Dashboard");
        this.addIcon("paperclip","Paperclip");
        this.addIcon("heart-empty","Heart Empty");
        this.addIcon("link","Link");
        this.addIcon("phone","Phone");
        this.addIcon("pushpin","Pushpin");
        this.addIcon("usd","Usd");
        this.addIcon("gbp","Gbp");
        this.addIcon("sort","Sort");
        this.addIcon("sort-by-alphabet","Sort By Alphabet");
        this.addIcon("sort-by-alphabet-alt","Sort By Alphabet Alt");
        this.addIcon("sort-by-order","Sort By Order");
        this.addIcon("sort-by-order-alt","Sort By Order Alt");
        this.addIcon("sort-by-attributes","Sort By Attributes");
        this.addIcon("sort-by-attributes-alt","Sort By Attributes Alt");
        this.addIcon("unchecked","Unchecked");
        this.addIcon("expand","Expand");
        this.addIcon("collapse-down","Collapse Down");
        this.addIcon("collapse-up","Collapse Up");
        this.addIcon("log-in","Log In");
        this.addIcon("flash","Flash");
        this.addIcon("log-out","Log Out");
        this.addIcon("new-window","New Window");
        this.addIcon("record","Record");
        this.addIcon("save","Save");
        this.addIcon("open","Open");
        this.addIcon("saved","Saved");
        this.addIcon("import","Import");
        this.addIcon("export","Export");
        this.addIcon("send","Send");
        this.addIcon("floppy-disk","Floppy Disk");
        this.addIcon("floppy-saved","Floppy Saved");
        this.addIcon("floppy-remove","Floppy Remove");
        this.addIcon("floppy-save","Floppy Save");
        this.addIcon("floppy-open","Floppy Open");
        this.addIcon("credit-card","Credit Card");
        this.addIcon("transfer","Transfer");
        this.addIcon("cutlery","Cutlery");
        this.addIcon("header","Header");
        this.addIcon("compressed","Compressed");
        this.addIcon("earphone","Earphone");
        this.addIcon("phone-alt","Phone Alt");
        this.addIcon("tower","Tower");
        this.addIcon("stats","Stats");
        this.addIcon("sd-video","Sd Video");
        this.addIcon("hd-video","Hd Video");
        this.addIcon("subtitles","Subtitles");
        this.addIcon("sound-stereo","Sound Stereo");
        this.addIcon("sound-dolby","Sound Dolby");
        this.addIcon("sound-5-1","Sound 5 1");
        this.addIcon("sound-6-1","Sound 6 1");
        this.addIcon("sound-7-1","Sound 7 1");
        this.addIcon("copyright-mark","Copyright Mark");
        this.addIcon("registration-mark","Registration Mark");
        this.addIcon("cloud-download","Cloud Download");
        this.addIcon("cloud-upload","Cloud Upload");
        this.addIcon("tree-conifer","Tree Conifer");
        this.addIcon("tree-deciduous","Tree Deciduous");
        this.addIcon("cd","Cd");
        this.addIcon("save-file","Save File");
        this.addIcon("open-file","Open File");
        this.addIcon("level-up","Level Up");
        this.addIcon("copy","Copy");
        this.addIcon("paste","Paste");
        this.addIcon("alert","Alert");
        this.addIcon("equalizer","Equalizer");
        this.addIcon("king","King");
        this.addIcon("queen","Queen");
        this.addIcon("pawn","Pawn");
        this.addIcon("bishop","Bishop");
        this.addIcon("knight","Knight");
        this.addIcon("baby-formula","Baby Formula");
        this.addIcon("tent","Tent");
        this.addIcon("blackboard","Blackboard");
        this.addIcon("bed","Bed");
        this.addIcon("apple","Apple");
        this.addIcon("erase","Erase");
        this.addIcon("hourglass","Hourglass");
        this.addIcon("lamp","Lamp");
        this.addIcon("duplicate","Duplicate");
        this.addIcon("piggy-bank","Piggy Bank");
        this.addIcon("scissors","Scissors");
        this.addIcon("bitcoin","Bitcoin");
        this.addIcon("yen","Yen");
        this.addIcon("ruble","Ruble");
        this.addIcon("scale","Scale");
        this.addIcon("ice-lolly","Ice Lolly");
        this.addIcon("ice-lolly-tasted","Ice Lolly Tasted");
        this.addIcon("education","Education");
        this.addIcon("option-horizontal","Option Horizontal");
        this.addIcon("option-vertical","Option Vertical");
        this.addIcon("menu-hamburger","Menu Hamburger");
        this.addIcon("modal-window","Modal Window");
        this.addIcon("oil","Oil");
        this.addIcon("grain","Grain");
        this.addIcon("sunglasses","Sunglasses");
        this.addIcon("text-size","Text Size");
        this.addIcon("text-color","Text Color");
        this.addIcon("text-background","Text Background");
        this.addIcon("object-align-top","Object Align Top");
        this.addIcon("object-align-bottom","Object Align Bottom");
        this.addIcon("object-align-horizontal","Object Align Horizontal");
        this.addIcon("object-align-left","Object Align Left");
        this.addIcon("object-align-vertical","Object Align Vertical");
        this.addIcon("object-align-right","Object Align Right");
        this.addIcon("triangle-right","Triangle Right");
        this.addIcon("triangle-left","Triangle Left");
        this.addIcon("triangle-bottom","Triangle Bottom");
        this.addIcon("triangle-top","Triangle Top");
        this.addIcon("console","Console");
        this.addIcon("superscript","Superscript");
        this.addIcon("subscript","Subscript");
        this.addIcon("menu-left","Menu Left");
        this.addIcon("menu-right","Menu Right");
        this.addIcon("menu-down","Menu Down");
        this.addIcon("menu-up","Menu Up");
    }

    addIcon(name: string, label: string) {
        this.icons[name] = {"name": name, "label":label};
    }

    render() {

        const options: JSX.Element[] = [];
        let cls: string;
        for (const opt of Object.keys(this.icons)) {
             const cls = 'glyphicon glyphicon-' + this.icons[opt].name + ' icon-picker-icon';
             options.push(<li onClick={(e) => {this.onchange(e); }}>
                            <span className={cls}></span>
                            {this.icons[opt].name}
                        </li>);
        }

        return (
            <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <span className={'glyphicon glyphicon-' + this.selectedItem}></span><span className="caret"></span>
                </button>
            <ul className="dropdown-menu" role="menu">
                {options}
            </ul>
        </div>

        );

        // <select className="modal-dialog-select" data-show-icon="true" onChange={(e) => {this.itemSelected; }}>
        //    {options}
        // </select>
  }
}

