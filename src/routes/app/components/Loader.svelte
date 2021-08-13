<style>
  section {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .lid, .jar {
    border: 4px solid #000000;
  }

  .lid {
    width: 100px;
    height: 20px;

    border-radius: 8px;

    background: rgb(82,81,81);
    background: linear-gradient(90deg, rgba(82,81,81,1) 0%, rgba(179,179,179,1) 50%, rgba(82,81,81,1) 100%);
  }

  .jar {
    border-radius: 16px;
    position: relative;
    width: 100px;
    height: 140px;
    overflow: hidden;
  }

  .jam {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 140px;
    background: #a50b5e;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
    transition: .5s;
  }

.jam::before {
  content: '';
  width: 400px;
  height: 400px;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
}

.jam::before {
  border-radius: 45%;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

</style>

<section>
  <div class="lid"></div>
  <div class="jar">
    <div class="jam"></div>
  </div>
</section>
