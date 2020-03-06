## JNU Survey Network Using Hyperledger Fabric

### ��Ʈ��ũ �غ����

Test environment SW version list

- golang 1.11
- docker 18.09.7
- docker-compose 1.17.1
- node.js 8.10.0
- NPM 6.14.1
- python 3.6.9
- pip 20.0.2

Prepare prerequisites for Fabric and WebApp

```bash
sudo ./prepare.sh all
source /etc/bash.bashrc
```

Prepare prerequisites for Fabric

```bash
sudo ./prepare.sh light
source /etc/bash.bashrc
```

Prepare prerequisites for WebApp

```bash
sudo ./prepare.sh webapp
```

### ��Ʈ��ũ ����

```bash
sudo ./operate.sh up -y
```

### ��Ʈ��ũ ����

```bash
sudo ./operate.sh down -y
```

### docker�� �̿��� �� ��ü ����

```bash
cd web-app/
sudo docker-compose -f docker-compose.yaml up -d
```

### �鿣�� ���� ����

```bash
cd web-app/server/
npm install
npm run start
```

### ī�� �ν� ���� ����

```bash
cd web-app/card-recognize-api/
pip3 install -r ./requirements.txt
python3 app.py
```

### ����Ʈ���� ���� ����

```bash
cd web-app/client/
npm install
npm run serve
```

### ����

- [hyperledger-fabricdocs (release-1.4)](https://hyperledger-fabric.readthedocs.io/en/release-1.4/)
- [Hyperledger Fabric SDK for node.js](https://hyperledger.github.io/fabric-sdk-node/release-1.4/index.html)
- [Hyperledger Fabric contract SDK for node.js](https://hyperledger.github.io/fabric-chaincode-node/release-1.4/api/)
- [hyperledger/fabric-samples/first-network](https://github.com/hyperledger/fabric-samples/tree/release-1.4/first-network)
- [hyperledger/fabric-samples/balance-transfer](https://github.com/hyperledger/fabric-samples/tree/release-1.4/balance-transfer)
- [hyperledger/fabric-samples/commercial-paper](https://github.com/hyperledger/fabric-samples/tree/release-1.4/commercial-paper)
- [IBM/evote](https://github.com/IBM/evote)
- [IBM/auction-events](https://github.com/IBM/auction-events)
