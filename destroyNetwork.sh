bash ../fabric-dev-servers/stopFabric.sh
bash ../fabric-dev-servers/teardownFabric.sh

composer card delete --card admin@anoubis-network
composer card delete --card PeerAdmin@hlfv1

rm -fr ~/.composer