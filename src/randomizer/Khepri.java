package randomizer;

public class Khepri extends godClass{ 
    public Khepri() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Khepri test = new Khepri();
    System.out.println(test.getDamageType());
    }
}
