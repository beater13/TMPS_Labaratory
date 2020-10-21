interface NewNotification {
  send(property: NewNotificationProperties): void;
}

interface NewNotificationProperties {
  title: string;
  description: string;
  recipient: string;
}

class MailNotification implements NewNotification {
  system: any;

  constructor(emailSystemDependency: any) {
    this.system = {
      makeMailRequest: (property: NewNotification) => null,
    };
  }

  send(property: NewNotificationProperties): void {
    this.system.makeMailRequest(property);
    console.log(`Notified ${property.recipient} about "${property.title}" via Mail`);
  }
}

class SmsNotification implements NewNotification {
  system: any;

  constructor(smsNotificationDependency: any) {
    this.system = {
      makeSmsRequest: (property: NewNotification) => null,
    };
  }

  send(property: NewNotificationProperties): void {
    this.system.makeSmsRequest(property);
    console.log(`Notified ${property.recipient} about "${property.title}" via SMS`);
  }
}
/**
 *  Factory
 */
export class NotificationFactory {
  createEmailNotification(): NewNotification {
    const MailDependency = null;
    return new MailNotification(MailDependency);
  }
  createSMSNotification(): NewNotification {
    const SMSDependency = null;
    return new SmsNotification(SMSDependency);
  }
}
