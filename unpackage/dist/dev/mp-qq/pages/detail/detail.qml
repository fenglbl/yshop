<view class="detail data-v-3f728b9c"><swiper class="swiper data-v-3f728b9c" autoplay="true" current="{{swActive}}" interval="3000"><block wx:for="{{detail.sliderImageArr}}" wx:for-item="item" wx:for-index="index" wx:key="index"><swiper-item class="item data-v-3f728b9c"><image class="image data-v-3f728b9c" src="{{item}}" mode></image><view class="indicator data-v-3f728b9c">{{''+(index+1)+"/"+detail.sliderImageArr.length+''}}</view></swiper-item></block></swiper><view class="title data-v-3f728b9c"><view class="first data-v-3f728b9c"><view class="prices data-v-3f728b9c"><view class="price data-v-3f728b9c">￥<text class="num data-v-3f728b9c">{{detail.price}}</text></view><view class="vip-price data-v-3f728b9c">{{'￥'+detail.vipPrice+''}}</view><view class="vip data-v-3f728b9c"><image class="image data-v-3f728b9c" src="../../static/img/detail/vip.png" mode></image></view></view><view class="share data-v-3f728b9c"><uni-icons vue-id="3e15c620-1" type="redo" size="28" class="data-v-3f728b9c" bind:__l="__l"></uni-icons></view></view><view class="name data-v-3f728b9c">{{''+detail.storeName+''}}</view><view class="rests data-v-3f728b9c"><view class=" original-cost data-v-3f728b9c">{{'原价:￥'+detail.otPrice+''}}</view><view class="inventory data-v-3f728b9c">{{'库存:'+detail.stock+detail.unitName+''}}</view><view class="sales data-v-3f728b9c">{{'销量:'+detail.sales+detail.unitName+''}}</view></view></view><view class="coupon data-v-3f728b9c"><view class="left data-v-3f728b9c"><text class="name data-v-3f728b9c">优惠券:</text><view class="item data-v-3f728b9c">满101减100</view><view class="item data-v-3f728b9c">满11减1</view></view><view class="icon data-v-3f728b9c"><uni-icons vue-id="3e15c620-2" type="arrowright" size="24" class="data-v-3f728b9c" bind:__l="__l"></uni-icons></view></view><view class="specification data-v-3f728b9c"><view class="left data-v-3f728b9c"><text class="name data-v-3f728b9c">优惠券:</text><view class="text data-v-3f728b9c">黑</view></view><view class="icon data-v-3f728b9c"><uni-icons vue-id="3e15c620-3" type="arrowright" size="24" class="data-v-3f728b9c" bind:__l="__l"></uni-icons></view></view><view class="shop data-v-3f728b9c"><view class="title data-v-3f728b9c">门店信息</view><view class="desc data-v-3f728b9c"><view class="left data-v-3f728b9c"><image class="image data-v-3f728b9c" src="https://image.dayouqiantu.cn/noMeal_tt.png" mode></image><view class="name data-v-3f728b9c"><view class="shop-name data-v-3f728b9c">yshop店铺</view><view class="site data-v-3f728b9c">四川省成都市</view></view></view><view data-event-opts="{{[['tap',[['phone',['$event']]]]]}}" class="icon data-v-3f728b9c" bindtap="__e"><uni-icons vue-id="3e15c620-4" type="phone" size="32" color="#73cbb6" class="data-v-3f728b9c" bind:__l="__l"></uni-icons></view></view></view><view class="introduce data-v-3f728b9c">产品介绍</view><view class="data-v-3f728b9c"><rich-text nodes="{{detail.description}}"></rich-text></view></view>