
# React Global State Controll Hook by Malbizer

React Global State Controll, for controll your states using simple Hook:

## 1 - Installation

* Just copy there file to your project (sugest on service folder):

![Example](https://github.com/Souzanderson/reactglobalstatemalbizer/blob/main/read_me_files/img1.png?raw=true)

## 2 - Usage

* Import ```GlobalStateController``` in ```index.tsx``` and call tag, like this:


![Example](https://github.com/Souzanderson/reactglobalstatemalbizer/blob/main/read_me_files/img2.png?raw=true)

## 3 - State Change

* For change your global state, import ```StateChager```, using instance method ```StateChager.init('your_key_storage')``` define your key storage two save/get value,  call set  ```StateChager().setState('value_storage')``` for change state:


![Example](https://github.com/Souzanderson/reactglobalstatemalbizer/blob/main/read_me_files/img3.png?raw=true)