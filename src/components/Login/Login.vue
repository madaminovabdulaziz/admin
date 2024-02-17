<template>
  <div class="wrapper">
    <div class="logo">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABIFBMVEX///8REiQtMZT3lB0AAADa2tsqLpP3jgAkKZEiJ5EtMZP3jwApLZP2jAAgJZAODyIbII/3khUWHI4AAIYZHo6+v9kAABfu7vQTGY2anMX9/PgAABwAABRmaalCRZro6PA5PZcyNpX29vj8+O+nqMvIyd7d3emChLdUVqFsbq21ttMAC4paXKT78OKKi7v4w47T1OV2eLGur9GTlcF7fbT50aj3mzH61rP76dT3r2VbXqSUlJpJTJ1pa6yFh7nNzuCGWnGqbVW1ck/LfkH40aj74MP3pFH3unv3okT4x5ZiY2uop62NjZUpKjhBQUxycnpbW2RcRn+bZmBBOYpuT3nWsZv3q1z1mys6PEcsLDh8fYbDxcgcHS6cnqRMTVe1trfDkQGVAAAXpUlEQVR4nO1dC1viSBaN0Q4VCKEIiQSEkIQEAkEkBF8Isrszitoo7uxut9q28///xdYjKD542Ao68+X0pzYYqupU3Xvq1lOGCREiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQC0TBSk9/ID3rgc+IdLWtpmYRS6nt6l+LW7puSALrznrMZYFk1P9C1DKqyLEsqOH/p6t+3bd65uh3Zs9Cb9CGagOW5UQ181HlfA1sp5DuSCyGWkU0WqokiiJUJWJ0yEBlFYq8KKktRLWqkgclJ11w7I8u+VQU8qrb6IikuHyHYUoaZAOIKa1Q0FLi/WutxDD3jzZctVv46NJPhq8Cli9jLlFO7piMLQuUBSfKNdIktgOxlWIIssKYDn1CLPMsUP2PLv8EFBxsgsBHrQCkjlWwLY1TRSAAUTUOG6OnGodG8CanWXbB6kjI0XgffYtKzqdstEaUx22jl4Aoe0rVUlAp07bfdfK+/Uj4TNvPO13yZkGxqooni6Ck43YEbGNS6h+FElNSsVFFYZ3R6nbGsptlzzKnf8i0vHLTtjJ2XWPqxBkFtcR8plYzu21GJ87CawxjZaxqXoU8L4OpDdAAEgBQzVfRBxhG4wkznWl3Z9TH8lDQYCdDahw66WrLbmkydhlUTG5K9RcEqixA1sp2q5rukBTkDErskzRaSRRYo4uoAOjblR7DKOq9prcnf6x9r/yqwjC9iu1DnEY3ygK+tLzST0YDIr8XFY6DeaVuKYfdcqOCyswJPFSj2sTKL2hRZK4Ch7qCSqOcP7StQyUvC5wi4p7gE4hIicN6Bgs+tDJ+01F5wMuVLlS5WstqTA0D0w2rXONU2K0gWeRVp+pnLNkvQGLDH95mJhENTmdKVkXxIHUb0WPMORUAPedRmxRgS6lYJapCQP9oBamQUkkZJlPJCHwQZ/Cp5vwpNFN8EIsADiXCZEikKVYWV+bZUJgG0QneSXebTJ3GvpwMyq9ykUaZlyk1qc4086ZD6kdtoOQ/CEqqV8YNJnZ6Gu5YD2UBQFdrvnqAZTY1FwIBde4FFDf3OpgZX+6lPohZA/KVPFJoMd9sN/Ip1/Va7a71i15fsrrtlue6qXyj3czjcLNb4eGHSAiWjagPWehlWhaOZFGo96YqVliSiGS1Mh5kZR/HIR8xukayEVXtstvyy76MvSLK8qk39D+NFEBJIK2HKMGWe2hLHyMhZPQrV5lKvTxSDTX/plio0FZHGnJYrzBVORiFLxdpA3c3qs3UK55MOy/jzYWosmKUBIxet87YuOYEY9nG6JOQFZiZSsHDJQCp1jsUId1KYT9TvUIlYwISVi95WG2STlWsVx30ommIfH4OAfO82c+U8rxo4O7dqdZJ3y8ut8mqEgmkFK3ga0LNm6frStcgrM3zXNOrCZpf0BQyqpaW6WU+08J9qNrUFA0KnAD4+szPlAz0EWDMbtg6AChJiJJuYhvnW8zSrLGZsjyejULfsTRApqTUmbFhFQpRMjU1swGaLtFGoFmOjyJ94FmviTzfAhNyakZFoUH5sE0cnIMzO+Z6oOSoT5jZuAqkzNqH5TzAWXFwOaE+EkS+pchGpkalkYOzZnHTbYm9h9Se5Wg2Hf3Aei1jyEqZX5I0pvHI0jB7npYhc59g5nC3FwXsGPhob8YHGmQaleMzmtczDZQJt4wms3B/jMLTthfFegy1WXqQcTn2ETh31jIEnRoXo16bKeH/Qeu9Sj8FDq5NuWQb6ZIn8+6sfjndldhnkLqzPtVyedkrpQ27hOtR6Lxf+SehpBIdLBk9pqT49VnRoc3yz3khc2Rn+WWh7islpmeUOKym6uIHMBlsf0Lb6qY7LuRFbqpVmfWnZvhgjvWpfpPhRB66nXTXamMLERe/hlaj+bA2VQR1Ws03HlaRngNq00SHhMAsiNpRWpO19+bxDGTlwah7ecJLntYr+ZIwmReeqJ+m4nUyZgBtzyeyKL43j8cwTcYlDUYWi1C+zuRnezpko9OIoUbTpwi/Q2pO9HnSZO7cE3q/BEVPo8iU08oVYpEcmOjTSNamNlfQaFNEtSRwxAYrZY3DkwTaIqd2PFmzXMCXjQzEo/jJ41vk+7NpkRYRJsoCiYFZmNHLPHAtTZ5j0POrMFWWb5c8WK7lcXNIExzMrApwghg+BwdBdYKRkSkHIV8ri5VSm+fUxdmirZJWqmoenr1VX65CM2Ooc9Mi9qgamZfL7Kkcx6c8rUpmWKYK8NuAFUNwUCjXU+q6PiHMMRu+5sI5HCygBV0t08i+nJal63Wlh4JRHO6IiwuFO2QChym3GFPxy35mouMXrFqUFWa2GwdkoWZNDF7SGZSJYjKtFqNGFxpX0S457fZ6vMoDaEx71oeOob4YTo3Aq1GvOjUkM1Boo4Jew01jHeGE92XzgBKdXVGMnkiabupgOJOyTbs8rSNr2bPUgMxdCmLPUEgNiYsKGHs4QOI6XqWCm44zpgd7ZElBGzfH6DhNTpudIV18A5WKR5xAnjWO+1XYZINKS6NRB5welxJipjYSEQEAXhR5AIR7YnOoN12y533Nw1UpLUoWbZkQ4w5JvAimD6nGiHE8FP79jz/++a9//fOPf/xbgDzLzUksDcgY/ZBrLZRYg4z5DnWPBPjl6Q/fExP4//zx22oyliRAP3774z+8MB8x5hAbB/D0Q2KKi1lyN9MM6pU5J19mqThOfzwgxvP//Q2RWR0DYvfbf3lxLmJpurOi3HVQ1jyTXkTw0ROrliuCWo1Ols4a+VFi0e7/Yo9YBdxi/+tG5yqkj3swvlWrAdG1quIi5KMqSXk7ozuGJ6M+LD/rcUrMLr5Ai1ArzhR7irwMeMmLOrpv56WFzHdbkBXR8MtSy/6hVy/ZM2Y7qNwzW7GXicW25sq0YJd87zBzKKH4zRGjC5mtwosfsMw0WaQinqGmZlgFJZadwAs12YTw8DF6KVX3kGZwTQZv8BRnrxG8HkRx3bTv4I2k3Mwt2qUKVpejyCRikaO5cnU5Dm89dfw0HrrzrTfTeA4SbsCqV7ZT7NwRaX9ii8X6cyVAQo5Ur+w1IQlC3sJgAggxvu74dD5svjHEtwnagUzx21wJ1Olsn+/UedKjvYXBBBBTRH1l+TXrcSeTiZ3MlUCwwtjSSVC1EFP0aRAgkLiDVefaIJCdRmwu9SiQHlrwACG2kLEmNfIWJC0ndObrhd7cYiZxMlCWSbZwEUuAPbI5oEVzEOe0iTf7GEN2a4GyVCbbCRYReZjwF3KY1D/P3UOP6pNmu5ilzZYYxTngUJEfm0ovbm7uIWwWX/KZV/Zj2SJNa7P48F4N51eWsKHMayevQilt6jKUK7CiSmqnpIyC4G0UrMfikUhsded466j49GOTTfFpPRSPto53VmOxCEorubodvJtRSh2UIcpWhpJupt9/dsBKtatVy2+LNctu+NAddZWn8WQwKkEMI/Gd081HHzud0GSR00ePbZ7uxGOx+4SS8dGvKy70G7ZVE9u+Va3WUu8fLCqSoLYLjJlqMgVdfOgqf985Odn5jijRYiVj8ePdscbIfn+xzZLfx5/Z/RYngxtUNfF47DtO8ffgd0jloV5gmikTbyITpPefwLeRdgChxKQyjAHGYoAsRrG4eXTa34lHMLkkaraHYr/sZfEHD8ue7kSSlNROf/tos1gkST4QY4GBQmqmJICFzOeQRW5BZ1RfkSYFN8Xd/iopZOzeR7LIVl/g9WCI26sxUhmr/d1nDoqJ4UhKrvoS3d0tL2AGjkwYSVWtTIObCVFb9mgf0VpNRnb2Rm9tPWMWv5f6PdJakeT+0YQ4xKMhYlkjsRUL35cTAZ1wqlXyDjcete0eI3zb758e7QU1vrlFqfVHZd2OPJ7ziIwcKNuntLYCwcnuIYPe/4ZT3A0eIfMQnNOmC3LCHJORrwbdZRf1NIfu6AveJqpIJD+W3OnTis+exhC12Oqo0Tb346OZD6Sc+yPd3FvFT8WoQ2aPtk6Qm8XobNa9rZJpKs7RPDLZupCBZnAUpw3yj4Ytp6gsI6HGovZtG5e72EdMHorH7G2doN/FI7GTrXsTRVWCPtHH7by5/Y0KD9F6lN79J0noLeRBjRBbgCiOZsKEvNglwc2oQznaOt3a6u+jckeoZGOHwVROkBzG9x9cZ3Pv6Ghv8/51dh+5XuQE00RuGaFdBeo0Tvb7WyjJkWpakGaaB/PM+f0ayEhTaAMy0HSfTl5mN3e3vo+47WAX2ULMYjsvSR1CcQeZYQSLyO4OZRWJfO/vbmafiEjDHct0IQNoup7Jch0Nm6LYNjMvmMXm9nGMhL3x1d+xDyFbu3e0Rxj9Kru9SjQzFjve3nz+mOKbNbzYmNc62LEXtaaJNyhwWsfoyK5X1VzqyHvb27/vjtnY3hahloyfHDHF4xjymReY7SF/ih0XmaOTOG6tWLI/eiiLLHZ3e3ubvq67WhUFVR29g5dtwKJW/koqPubbEbRMWhEFQOdMT1EATMLWk1EPWwyoRfaLTD+CPOdZHH+EHo/3meI+McJYbCv44G7/hDhaJBKIRx4IUElnNNDBJ4wXtaHKZBqVtudXVIsppO7Xx7ZHIRMJganmEU3EJd6ljvaE2RHig9xrl/KnuohaeieQH2KahBjZq5gqMBmpkvFqlQazmB3dFaNdR0ZuoqYi8QCtQCT3cSLkJDKKxU+2cTn3ToirRfZxeP/EGvdwe51m90mNUF0sbp/E6edR7cSRNtIWIzvtUIyTB6gO7XrbWIx4NFWBlwybqXFpslBJJyB2t7aP9pCSb/dPSI0nI6vYsrJ9Kgo7myhWTCbHhGEziXlt7lCRweFJcQtHmLjFT/rbuzi1bSr3TZmsEBa4GmMbEi/M3lP9SyjgQwSc26y6TUKMP3zyQPaoT6Q7FsHBxBEdxkSOtpCCfL9X/SIax8S2jqjEJ1H5s1txGlz2n8WLdIVRa6aqdGs3WNA5YrpnW626HhFf4YUdYtmjY0INd2SbO0k6pNzHEhgUOnuM2mafDj+TOFDe3SG0Hg3iRiCbWbmO59IIGMxc4vlFkPNBiE/baJNN9PyLT+2dxLHaI0ksUmax/RMkFsGMNpLJ1ZP9GDXTIoo/sBHGT17s7Bh6mB1lRxgu8NBElKM58TSjSesSpBFiyMyyVEKSO9ibSEj/O/a8oCVPsshc8ZPfdyck5EZJBMwH2/vZxbBiRov4XEfXdEos/bLRE+VIolFXcWzCFAvI5tjLkyLqC5KBfryAQprsjWRRZsTyZ21TeAvSdCes0QF46CJ0TG3SfBjuglEIzBRXkw9MxieGk6tFBofBRD9ehKeRWWDOAR2DZAsXeC7JIk7MOVHUZAAqGnAnZVbEVoisbfNhxjRyOjZlFdvM4vA/djIhSGbSLtAUCFi9EyUDQFZa6N57MpOOM9PkWskTWfGp5D8Ad8DJnezYZM7Y5oHIEVEW1IFPApJ60Su1JY2ldr+wQJGiRLYichoHDunk85Rza8TRdrJbL0xToTBqh7jXxA+ncaep9phDIJBOk1v0znvFBRyAgJN6dLlgmkefEmaB6I8jeDN+OvmzRKfEMtOTBEFGWboLv96p0da6iqm4GkNG0ty02w4Is5O9Z00W2Tuewcukd+jkGc1V0kpXay/8HoxCw272kMjn3WqZn9lrYjOM7PefNFmyj3vo+LTlliDUKFfdNsqz17Qbi76Vpa3KUBI1pQT1YOv91DMM2M9i+zuPie3M5MXUgk33OizZGpSgrE65y+VdUCKdJufWy7BN1IqdqPgEJHr6/pgYfjlFDxms9SQXvS2X63T/vrvwUzv0niUWVnSOBgSSwlQm+9mEVehpK9BmhVFof9nh9EqQ3SImFJ9kS+9piqLgw6D7B5S6O2WXwljsMcZrdVK/jOC5dUpMNzh6DoQVlnEhS2900E0XdAMfp7FddtoIcC/5XO5fmuAZoamyro0PSaJ6o8bO4s5lCaB3QaCMDU7DDeYBxG6KHO99f7IQHfs+hVcD3+XhKSob1Vg9ICYt6SR0jZ5bwbQMqcmQQee0nc/BbNSoufBQbSLS2NI5jmlKRjQabJWedrvVu8LsBPvpdTw3Szet81MOXKFG+5aMk9WGWCT5bUpzoUHzaCM6soOgvfg595S8A9IBM0ECerpArqqIzthyurnb/3Z8/K2/+8J87xgydOVDLKR1EByrEztLvEbB7Egciksd25E7NPp5n+3+BXEkgh0ZJa7iTJbXXgSWLhoWFn/ZyQT3dVYY+037MFo2U6GWIGYciAUeZTLpaNAC0bOrVrVU0EWnQ30Bml03/8vVa7bdrhmoUscR9UIJJW8v/8rWnqdDFDWi9tKAQY92qEipRf1Xr2/SeRbS67vYqA50y5FRhAj11lJ6sDFYwRFMTnSMoBfVqxD3pb+06FjF92lCejUJG2UNRyR35aGgdOmmmBldoshRYpzcrJK4zv2F3tQnQS+sNkd9/+isz0dcjuy7HDVB+h04dFkVxQmvlhCPVhK06NzvA36lkt4OSx0vA6wGp83x7UuvS8gLok/VZqrjR905dfmSSFAdP5ku6HYwU4xK+KoCjYyaizK2Pnb+kVvqPUCP0DBGp52BIYhyXRnV96s20IyOFkOlLvGCMbrURNQ/8L5Ps6WS5QnRMdOOBPXuyOdfMUNRCBos2tVFyUkH1ysK5BbyD0TPUUVeJjuBLAMEcsK9vA4zAfRCzGiUAwYxYU3mRdVZdv/1HA2/ZZWsruN4ZS1osGdLglNRDuyZ08qe0+lapUzL/wS3zmL4AAJBAGB0uPR1+zHsQBSjUYBTkcFnuUXdBk+vI4GzbuEeh2k9+zj4HLf644s7HiHKQqP+3EfMUuk5396hLj89LD31mo9lwqyrjy6eApwkQlk/VMZ5KA7L86wzHkmaCmIl8pLw+NPq9Nt0lopSTXooHF5KqHASL0qu4ysFUkqzreKulwNqm7xOFxTfcSXEiqv07uUD05JqH36p8yPYNTegxom46OlqF0o8EFXVaHt+07u3Vug1617bUCUR8BLskj8HYo7+HAPv1j6He42jV1FR4CAI9wMNUymj8kOeF0U4ZmwAiiKP/w6I8WCraBAkCLysVj6JzD+BqbScjvNo7jRtZ7odQ1THg0oJGp1u5vGfY2g6mtNSPo9vzYd0qeHcX4DB1xqlv9Df1pmFQpSGuhyMfpI/P/BeMOuGrKqy8Ymk/L1gNmz7hR46RIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIT4DvvxNwaz9TcGs/E0REvurISCWCL5Wxn6urGxsrCQeXqH/JTYeXn5yUGKJq8RK4vyW/v969Lv1y8vc9dWIyu1dInF+ef1XYUaJbZydbawP1nPrK+u5tcHtRi63nsitfUUY/lzLra0lNtbWrr+srV0NLj4fsZdLFLTY7SB3e3NzcLN2czC8Obg+OLi5+Hn35W5tbZi+PPjy5fziy5e7Hxfo59UyiSUwVsgX9gL6E/9YSYz+YedA3zbwF/q+cu8rgY/lDlbOhsP14fBsbW2wMVhZGw4vcxc/vtwMD85/rJ19/XG1dp7+QtJeHtbPzm9yK7nz64v1842Nm8HFdeJ2/fz6EhG63TjfuN24zQ0TP68GN4Obu8H1z+HN4HIwGNwlxoltnF0OLg/Ozm4uNnKDxM/c+tngDpnfxpebg7s/167+/JHLXRe+3C7XDhN3ZzdffwxvUMEHlz/PhoOzwQEq158Xaz/PBoObg6+DC1Tijcu7q5ufP88ubgY/L4cXP4cb48QSia83t4PE+flB4vbybHi5cnB5t/FzOEDmd/1l+GN48OfNxY+7L7mlElvJ/YnaYTC8RD6CLOjrcIhc5AZRvP16+RXV+M3l4Pbnj6tB4usF5nlw8fV6cD48yI0TW9kY3m5cD4aJ88Ewd7Z2Nri9vk7cHdys5xDBg7NcDpnkcG24VA/Drp9IXK1dJK43rhK3t1fr17fXuYvb2+vz22uk47fnt1eJHFLzlbu79avcVeL69nYlcbG+8ogY9rrE+gb5Qv/WsTdtIG1E7ydyqHE3comNlaX3YlgY7mXi/ouCaEsgI6NHVh408u8eefz9EBL7q+H/OoLncQbxIF8AAAAASUVORK5CYII="
        alt=""
      />
    </div>
    <div class="text-center mt-4 name">Dashboard</div>
    <form @submit.prevent="handleSubmit" class="p-3 mt-3">
      <div class="form-field d-flex align-items-center">
        <span class="far fa-user"></span>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="form-field d-flex align-items-center">
        <span class="fas fa-key"></span>
        <input
          type="password"
          name="password"
          id="pwd"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn mt-3">Login</button>
    </form>
    <!-- <div class="text-center fs-6">
      <a href="#">Forget password?</a> or <a href="#">Sign up</a>
    </div> -->
  </div>
</template>

<script>
import login from "../../components/Api/Api";
import axios from "axios";

export default {
  emits: ["setloading"],
  data() {
    return {
      data: "",
      username: "",
      password: "",
      role: localStorage.getItem("role"),
    };
  },
  created() { console.clear();
    this.$emit("setloading", false);
    localStorage.clear();
    // console.log(localStorage);
    // console.clear();
  },
  methods: {
    async handleSubmit() {
      // this.isloading = true;
      // console.log(this);
      const url = "https://writer-production.up.railway.app/token";
      let params = new URLSearchParams();
      params.append("username", this.username);
      params.append("password", this.password);

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      // console.log(url, params, config);
      // console.log(this);
      axios.post(url, params, config).then(
        (response) => {
          console.log(response);
          if (response.status == 200) {
            // console.log("200 boldi");
            // console.log(response.data);
            // console.log();
            localStorage.setItem("access_token", response.data.access_token);
            // localStorage.setItem("branch_id", response.data.branch_id);
            localStorage.setItem("role", response.data.role);
            if (localStorage.role == "admin") {
              this.$router.push("/orders");
              // console.log("adminga kiridik");
              // window.location.reload();
              console.log(localStorage);
            } else if (localStorage.role == "worker") {
              this.$router.push("/mystart");
              // console.log("workerga kiridik");
              // window.location.reload();
            }
          } else if (response.status == 401) {
            // console.clear();
            // console.log("401 boldi");
            //
          }
        },
        (error) => {
          // console.log(error.response.status);
          if (error.response.status == 401) {
            localStorage.removeItem("role");
            localStorage.removeItem("access_token");
            Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            })
              .fire({
                icon: "error",
                title: "Incorrect username or password!",
              })
              .then(() => {
                if (window.location.pathname == "/") {
                  console.log();
                } else {
                  window.location.href = "/";
                }
              });
          }
        }
      );
    },
  },
};
</script>

<style>
/* Importing fonts from Google */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

/* Reseting */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #ecf0f3;
}

.wrapper {
  max-width: 350px;
  min-height: 450px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #ecf0f3;
  border-radius: 15px;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7,
    -8px -8px 15px #fff;
}

.wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #555;
}

.wrapper .form-field input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
  /* border: 1px solid red; */
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
  color: #555;
}

.wrapper .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #2db16f;
  color: #fff;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
  letter-spacing: 1.3px;
}

.wrapper .btn:hover {
  background-color: #03d260;
}

/* .wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #03a9f4;
}

.wrapper a:hover {
  color: #039be5;
} */

@media (max-width: 380px) {
  .wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
</style>