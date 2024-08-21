package randomizer;

public class Nemesis extends godClass{ 
    public Nemesis() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Nemesis test = new Nemesis();
    System.out.println(test.getDamageType());
    }
}
