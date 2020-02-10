import React from 'react';

export default class Image extends React.Component{
  render () {
    let image = '';
    switch(this.props.img){ 
      default: 
        image = "http://oboinastol.net/katalog_kartinok/tom20/018/skachat_oboi_960x540.jpg";
        break;
      case 0:
        image = "https://million-wallpapers.ru/wallpapers/4/73/9929974507706928446/zakat-zabor-derevya-listva-osen.jpg";
        break;
      case 1:
        image = "https://cdni.rt.com/russian/images/2018.10/article/5bc1d61f18356189348b45c5.jpg";
        break;
      case 2:
        image = "https://www.wkbn.com/wp-content/uploads/sites/48/2019/06/obit-generic-2.jpg";
        break;
      case 3:
        image = "http://oboinastol.net/katalog_kartinok/tom20/018/skachat_oboi_960x540.jpg";
        break;
    }
    return <img src={image} 
                alt="image" 
                className="gallery__img img-fluid">
            </img>
  }
}