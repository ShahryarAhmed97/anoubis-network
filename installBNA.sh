composer archive create -t dir -n .

composer network install --card PeerAdmin@hlfv1 --archiveFile anoubis-network@0.2.6-deploy.0.bna

composer network start --networkName anoubis-network --networkVersion 0.2.6-deploy.0 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkAdmin.card

composer card import --file networkAdmin.card