import moment from "moment";

class Helper {
    public prefix_url: string;

    // Constructor to initialize the property
    constructor() {
      this.prefix_url = "/app";
     
    }
    
    timeformat = (value:string): any =>{
      if (value) {
        return moment
            .utc(String(value))
            .local()
            .format('lll');
    }
    }
    static loadHomeScripts = (): void => {
      const scriptList = [
        '/assets/js/app.js',
      ];
  
      scriptList.forEach((scriptUrl, index) => {
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = scriptUrl;
          document.head.appendChild(script);
        }, index * 200); // Adjust the delay as needed
      });
    };
  }
  
  export default Helper;
  