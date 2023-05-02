import { MenuItems } from 'Components';

export interface IDictionary {
    'recipients.options.title': string;
    'recipients.edit.title': string;
    'recipients.options.subtitle': string;
    'recipients.options.byHand': string;
    'recipients.options.byFile': string;
    'login.loginWithUsername.title': string;
    'login.generalError.message': string;
    'login.ChooseAccount.title': string;
    'login.multipleCompanyId.title': string;
    'login.multipleCompanyId.errorMessage': string;
    'login.multipleMobiles.title': string;
    'login.multipleMobiles.errorMessage': string;
    'login.otpData.ExceededTriesLimit': string;
    'login.otpData.title': string;
    'login.otpData.errorMessage': string;
    'login.loginWithEmail.title': string;
    'login.loginWithEmail.errorMessage': string;
    'login.loginWithUsername.errorMessage': string;
    'updateDetails.title': string;
    'updateDetails.generalDetails.title': string;
    'updateDetails.generalDetails.subtitle': string;
    'updateDetails.tevelDetails.title': string;
    'updateDetails.tevelDetails.subtitle': string;
    'updateDetails.tevelDetails.deliveryMethod.optionA': string;
    'updateDetails.tevelDetails.deliveryMethod.optionB': string;
    'updateDetails.collectorAddress.title': string;
    'updateDetails.courierDetails.title': string;
    'updateDetails.userPreferences.title': string;
    'updateDetails.userPreferences.otp.subtitle': string;
    'updateDetails.userPreferences.otp.longText': string;
    'updateDetails.userPreferences.otp.optionA': string;
    'updateDetails.userPreferences.otp.optionB': string;
    'updateDetails.userPreferences.terms.subtitle': string;
    'updateDetails.userPreferences.terms.ads.longText': string;
    'updateDetails.userPreferences.terms.hypertext': string;
    'updateDetails.collectorAddress.headsUp': string;
    'updateDetails.submitDialog.button.save': string;
    'updateDetails.submitDialog.button.cancel': string;
    'updateDetails.submitDialog.title': string;
    'addUpdateServices.popup.title': string;
    'addUpdateServices.popup.subtitle': string;
    'addUpdateServices.longText': string;
    'addUpdateServices.allServices.title': string;
    'addUpdateServices.allServices.subtitle': string;
    'addUpdateServices.resultPage.title': string;
    'addUpdateServices.resultPage.subtitle': string;
    'addUpdateServices.resultPage.error.subtitle': string;
    'resultPage.error.title': string;
    'resultPage.error.subtitle': string;
    'serviceEnum.service.1': string;
    'serviceEnum.service.2': string;
    'addressBlock.emailHint': string;
    'addressBlock.zipError.notFound': string;
    'addressBlock.zipError.manyEntries': string;
    'addressBlock.zipError.missingData': string;
    'footer.body.title': string;
    'footer.body.body': string;
    'footer.body.link': string;
    'orderPickup.deliveryInfo.title': string;
    'orderPickup.deliveryInfo.chooseOneOf': string;
    'orderPickup.orderDelivery.title': string;
    'orderPickup.orderDelivery.whenToPickup': string;
    'orderPickup.success.title': string;
    'orderPickup.success.subtitle': string;
    'orderPickup.error.subtitle': string;
    'createShipment.deliveryType.title': string;
    'createShipment.deliveryType.subtitle': string;
    'createShipment.deliveryType.fromMe.title': string;
    'createShipment.deliveryType.fromMe.description': string;
    'createShipment.deliveryType.toMe.title': string;
    'createShipment.deliveryType.toMe.description': string;
    'createShipment.deliveryType.toHim.title': string;
    'createShipment.deliveryType.toHim.description': string;
    'createShipment.deliveryType.pickupInfo.title': string;
    'createShipment.deliveryType.pickupInfo.headsUp': string;
    'createShipment.shipmentType.type.headsUp': string;

    'createShipment.agreeAndSend.isSurfaces': string;
    'createShipment.agreeAndSend.whenToRecive': string;
    'createShipment.agreeAndSend.headsUp': string;
    'createShipment.fromMe.upgradeDialog.toggleText': string;
    'createShipment.fromMe.upgradeDialog.title': string;
    'createShipment.fromMe.upgradeDialog.subtitle': string;
    'createShipment.fromMe.upgradeDialog.operationText': string;
    'recipients.result.createError': string;
    'recipients.result.createSuccess': string;
    'recipients.result.updateError': string;
    'recipients.result.updateSuccess': string;
    'contactUs.title': string;
    'contactUs.subtitle': string;
    'contactUs.phone': string;
    'tevelDeliverySettings.deliveryTab.companyIdText': string;
    'tevelDeliverySettings.deliveryTab.rishumonText': string;
    'localShipmentByFile.checkFile.warning.title': string;
    'localShipmentByFile.checkFile.warning.body': string;
    'orderTracking.chooseService.title': string;
    'orderTracking.tabs.searchOverNumber': string;
    'orderTracking.tabs.searchOverDate': string;
    'orderTracking.tabs.searchOverFile': string;
    'globalErrorAlert.title': string;
    'globalErrorAlert.subTitle': string;
    'Constant.JobPositionsKeyValue': string;

    'createShipment.finalStep.title': string;
    'createShipment.finalStep.subTitle': string;
    'createShipment.ExceededWindowsPopup.message': string;
    'createShipment.ExceededWindowsPopup.newWindows': string;
    'createShipment.ExceededWindowsPopup.skip': string;
    'Const.TimeWindowRelevantTime': string;
    'updateDetails.submitDialog.UserTaken': string;
    'updateDetails.submitDialog.UserUpdated': string;
    'CreateUpdateUser.success.message': string;
    'CreateUpdateUser.failed.message': string;
    'CreateUpdateUser.serviceError.message': string;
    'CreateUpdateUser.permissionSection.title': string;
    'CreateUpdateUser.permissionSection.subtitle': string;
    'updateDetails.username.success': string;
    'updateDetails.username.taken': string;
    'updateDetails.username.success.subtitle': string;
    'updateDetails.username.body': string;
    'ResultPageCreateLocalShipment.title': string;
    'ResultPageCreateLocalShipment.subtitle': string;
    'ResultPageCreateLocalShipment.button.print': string;
    'ResultPageCreateLocalShipment.button.return': string;
    'orderTracking.tabs.searchOverNumber.notfound': string;
    'createShipment.deliveryType.surfaces.title': string;
    'createShipment.deliveryType.surfaces.description': string;
    'createShipment.uploadingFile.body': string;
    'Constant.SearchOverDate.daysScope': string;
    'Constant.SearchForFiles.daysScope': string;
    'Constant.myPickups.daysScope': string;
    'orderPickup.deliveryInfo.chooseOneOf.description': string;
    'timeWindow.noTimeWindow.error.body': string;
    'Constant.AFK.popupOnMinutes': string;
    'Constant.AFK.allowedMinutes': string;
    'orderTracking.tabs.searchOverDate.NotFound': string;
    'orderTracking.tabs.searchForFiles.NotFound': string;
    'CreateUpdateUser.userTaken.message': string;
    'orderPickup.headUps.surfaces': string;
    'orderPickup.headUps.item': string;
    'Constant.LocalDeliveryByHand.multiLimit': string;
    'Constant.LegalTerms.PageId': string;
    'Constant.PickupStatuses': string;
    'recipients.error.recipientExists': string;
    'createShipment.finalStep.subTitle.bigRequest': string;
    'Constant.LocalDeliveryByHand.finalPage.replaceBodyOn': string;
    'createShipment.FailedToCreateDeliveries': string;
    'createShipment.byFiles.bullets.content': string;
    'fastTrack.headsup.content': string;
    'createShipment.finalStep.offerToOrderPickup': string;
    'printDeliveryCertificates.headUp.moreThenOnButtonToPrint': string;
    'printDeliveryCertificates.A5Certificate.Label': string;
    'printDeliveryCertificates.A5Certificate.SubTitle': string;
    'printDeliveryCertificates.A4Certificate.Label': string;
    'printDeliveryCertificates.A4Certificate.SubTitle': string;

    'printDeliveryCertificates.StickerSheet.Label': string;
    'printDeliveryCertificates.StickerSheet.SubTitle': string;
    'printDeliveryCertificates.StickersRoll.Label': string;
    'printDeliveryCertificates.StickersRoll.SubTitle': string;
}

export interface Url {
    openIn: '_blank' | '_self' | '_parent' | '_top';
    urlExternal: string;
    umbracoPageId: string;
}

export interface TevelDetails {
    FirstNameEn: string;
    LastNameEn: string;
    CompanyNameEn: string;
}

export interface GeneralDetails {
    FirstName: string;
    LastName: string;
    BusinessRole: string;
    Mobile: string;
    Email: string;
}

export interface IJobPositions {
    en: MenuItems[];
    he: MenuItems[];
}
export interface Menu {
    url?: Url;
    title: string;
    children?: Menu[];
}

export interface Link {
    imagePath: string;
    url: Url;
}

export interface Footer {
    logoImagePath: string;
    text: string;
    linkIconPath: string;
    socialMedia: Link[];
    downloadOptions: Link[];
}

export interface Urls {
    urlKey: string;
    url: Url;
}

export type IBulletOrRichText = IBullet | IRichText;
type FailedT<T> = T & { Reason: string };

export interface UploadedFileResults<T = any> {
    FileName: string;
    Succeed?: T[];
    Failed?: Partial<FailedT<T>>[];
}

export interface IGeneralPage {
    title: string;
    subTitle?: string;
    HtmlContent?: string;
    feComponentKey: string;
    Components: IBulletOrRichText[];
}

type BulletData = { text: string; link?: Url; filetype: string };
export interface IBullet {
    type: 'bullets';
    subtitle?: string;
    data: BulletData[];
    info?: string;
}

type RichTextData = { subtitle?: string; html: string; isNotice: boolean };
export interface IRichText {
    type: 'richtext';
    data: RichTextData[];
    info?: string;
}

export interface AfterLoginContent {
    Menu: Menu[];
    Footer: Footer;
}

export interface SiteContent {
    Dictionary: IDictionary;
    OnlineServices: number[];
    Urls: Urls[];
    ExampleFiles: IExampleFiles;
}

export interface IExampleFiles {
    localDeliveryFileFromMe: string;
    localDeliveryFileToMe: string;
    localDeliveryFileToHim: string;
    localDeliveryFileSurfaces: string;
    localRecipientFile: string;
}
export interface IDateRange {
    From: string;
    To: string;
}

export interface IAddress {
    City: string;
    CityID: string;
    StreetID: string;
    Street: string;
    Zip: string;
    HouseNum?: number;
    AptNum?: number;
    FloorNumber?: number;
    HouseEntry: string;
    Comments?: string;
    IsBasicSpreading?: boolean;
}

export interface IAddressLocalEn {
    City: string;
    Street: string;
    Zip: string;
    HouseNum?: number;
    AptNum?: number;
    HouseEntry: string;
    Comments?: string;
}

export interface ITimeWindow {
    TimeSlotFrom: string;
    TimeSlotTo: string;
}

export interface ISubOption {
    title: string;
    options: IOption[];
}

export interface IOption {
    optionPic: string;
    alt: string;
    optionTitle: string;
    url: Url;
    subOptions?: ISubOption;
}

export interface ICertificate {
    DeliveryDispatchingCenter?: string;
    RecipientCity: {
        DoarNaName?: string;
        IsBasicSpreading: boolean;
    };
    SpreadingType?: string;
    Service?: string[];
    ItemClassification?: string[];
    DeliveryNoteType?: string;
    UserName: string;
    UserNumber: string;
    Sender: {
        FullName: string;
        Street: string;
        HouseNum: string;
        City: string;
        FloorNumber: string; // יש רק בנמענים
        AptNum?: string;
        HouseEntry?: string;
        Zip?: string;
        Phone?: string;
        AdditionalPhone?: string;
        Comments?: string;
    };
    WeightRange?: string;
    Barcode: string;
    Recipient: {
        FullName: string;
        City: string;
        Street?: string;
        POBox?: string;
        HouseNum?: string;
        AptNum?: string;
        FloorNumber?: string;
        HouseEntry?: string;
        Zip?: string;
        Phone?: string;
        AdditionalPhone?: string;
        Comments?: string;
    };
    Comments?: string;
    StickerNotes?: string;
    AccountDispatchingCenter: string;
    IsRetunrCertificate: boolean;
}
