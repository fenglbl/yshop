<view class="uni-searchbar data-v-d16dc2a4"><view data-event-opts="{{[['tap',[['searchClick',['$event']]]]]}}" class="uni-searchbar__box data-v-d16dc2a4" style="{{'border-radius:'+(radius+'px')+';'+('background-color:'+(bgColor)+';')}}" bindtap="__e"><uni-icons class="uni-searchbar__box-icon-search data-v-d16dc2a4" vue-id="64ee5fa4-1" color="#999999" size="18" type="search" bind:__l="__l"></uni-icons><block wx:if="{{show}}"><input class="uni-searchbar__box-search-input data-v-d16dc2a4" focus="{{showSync}}" placeholder="{{placeholder}}" maxlength="{{maxlength}}" confirm-type="search" type="text" data-event-opts="{{[['confirm',[['confirm',['$event']]]],['input',[['__set_model',['','searchVal','$event',[]]]]]]}}" value="{{searchVal}}" bindconfirm="__e" bindinput="__e"/></block><block wx:else><text class="uni-searchbar__text-placeholder data-v-d16dc2a4">{{placeholder}}</text></block><block wx:if="{{show&&(clearButton==='always'||clearButton==='auto'&&searchVal!=='')}}"><view data-event-opts="{{[['tap',[['clear',['$event']]]]]}}" class="uni-searchbar__box-icon-clear data-v-d16dc2a4" bindtap="__e"><uni-icons vue-id="64ee5fa4-2" color="#999999" size="24" type="clear" class="data-v-d16dc2a4" bind:__l="__l"></uni-icons></view></block></view><block wx:if="{{cancelButton==='always'||show&&cancelButton==='auto'}}"><text data-event-opts="{{[['tap',[['cancel',['$event']]]]]}}" class="uni-searchbar__cancel data-v-d16dc2a4" bindtap="__e">{{cancelText}}</text></block></view>