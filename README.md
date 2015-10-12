# Example Image Uploading Using React componenet and the Carrier Wave Gem


* [CarrierWave](https://github.com/carrierwaveuploader/carrierwave) to handle file uploading. It will be 
added to both the User and Adventure models
* [CarrierWave::Base64](https://github.com/lebedev-yury/carrierwave-base64) for handeling base64 file encoding.
This is necessary because we are using react. React can upload files via [base64 data format](https://medium.com/@greggawatt/simple-file-uploads-in-react-js-backbone-js-and-rails-7a4ab43c7e27)


On upload, I store the file's state in the React state in a base64 file encoded string. This then is uploaded to the server via the base64 extension of Carrierwave and converts it into a URL. The initial upload is read into base64 form via javascripts FileReader library. 
