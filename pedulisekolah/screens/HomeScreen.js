import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import Header from './source/components/Header';
// import Category from './source/components/Category';
// import Card from './source/components/Card';
const App = () => {
  // const [cari, setCari] = useState('');
  // const [category, setCategory] = useState([
  //   {nama: 'Programming', icon: 'code-slash'},
  //   {nama: 'Design', icon: 'brush'},
  //   {nama: 'Artikel', icon: 'document'},
  //   {nama: 'Cleaning', icon: 'star'},
  // ]);

  // const [pekerjaan, setPekerjaan] = useState([
  //   {
  //     nama: 'Saya melihat Ada Siswa Kelas XII Merokok Di toilet sekolah.... baca selengkapnya',
  //     image: require('./source/images/insia.png'),
  //     namaPerusahaan: 'Merokok di Toilet Sekolah',
  //     new: true,
  //     category1: 'Melanggar Aturan Sekolah',
  //     // category2: 'Illustration',
  //     gaji: 10000,
  //   },
  // ]);

  // useEffect(() => {
  //   console.log(cari);
  // }, [cari]);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#337bff'} />
      <View
        style={{
          backgroundColor: '#337bff',
          paddingBottom: 30,
          paddingHorizontal: 20,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          elevation: 10,
        }}>
        <View style={{marginVertical: 10}}>
          {/* <Icon name="menu-outline" size={30} color="#337bff" /> */}
        </View>

        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 25,
            fontFamily: 'Righteous-Regular',
            marginTop: 20,
          }}>
          Selamat Datang,
        </Text>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 25,
            fontFamily: 'Righteous-Regular',
          }}>
          Di Aplikasi Peduli Sekolah
        </Text>
        <Text style={{color: '#FFFFFF', marginTop: 10, paddingRight: 60}}>
          Aplkasi Peduli Sekolah Adalah Aplikasi yang dibuat dengan tujuan
          supaya warga sekolah dapat melaporkan keluh kesah apa saja yang mereka
          rasakan di sekolah.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TextInput
            style={{
              backgroundColor: '#FFFFFF',
              paddingLeft: 25,
              flex: 1,
              borderRadius: 25,
              elevation: 2,
            }}
            placeholder="Masukan Token Laporan..."
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 20,
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              elevation: 2,
            }}>
            <Icon name="search-outline" size={25} color="#337bff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
        {/* <Category category={category} /> */}
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
            Hasil Pencarian
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 2,
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderRadius: 7,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{backgroundColor: '#337bff', borderRadius: 7}}>
                {/* <Image source={props.image} style={{width: 50, height: 50}} /> */}
                <Image
                  source={require('./../src/image/insia.png')}
                  style={{width: 50, height: 70}}
                />
              </View>

              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Merokok di Toilet Sekolah
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text style={{paddingRight: 50}}>
                    Saya melihat Ada Siswa Kelas XII Merokok Di toilet
                    sekolah.... baca selengkapnya
                  </Text>
                  {/* {props.new && (
              <View
                style={{
                  backgroundColor: '#337bff',
                  borderRadius: 7,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{color: '#FFFFFF'}}>NEW</Text>
              </View>
            )} */}
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View
                style={{
                  backgroundColor: '#337bff',
                  borderRadius: 7,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#FFFFFF'}}>Melanggar Aturan Sekolah</Text>
              </View>
              {/* <View
          style={{
            backgroundColor: '#337bff',
            borderRadius: 7,
            paddingVertical: 5,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: '#FFFFFF'}}>{props.category2}</Text>
        </View> */}
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  marginHorizontal: 5,
                  flex: 1,
                }}>
                <Text>
                  {/* ${props.gaji.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}/month */}{' '}
                  12-05-2022
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* <FlatList
            data={pekerjaan}
            renderItem={({item}) => (
              <Card
                nama={item.nama}
                image={item.image}
                namaPerusahaan={item.namaPerusahaan}
                new={item.new}
                category1={item.category1}
                category2={item.category2}
                gaji={item.gaji}
              />
            )}
          /> */}
        </View>
      </View>
    </View>
  );
};

export default App;
